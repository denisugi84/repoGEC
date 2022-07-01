<template>
    <div>
        <div v-if="is_notulen">
            <div v-if="edit_mode">
                <vue-editor 
                    use-custom-image-handler 
                    @image-added="handleImageAdded" 
                    v-model="meeting.note" 
                    :editorOptions="editorSettings">
                </vue-editor>
                <div class="float-end mt-1">
                    <div class="btn btn-primary"><i class="fa fa-check"></i> Simpan Catatan</div>
                </div>
            </div>
            <div class="alert alert-primary" v-else>
                <div class="alert-body">
                    Anda sebagai Notulen. Edit catatan Meeting <a href="javascript:void(0)" @click="changeEditingMode" class="btn btn-sm btn-primary"> disini</a>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="card border-secondary" v-if="meeting.note">
                <div class="card-body text-secondary">
                    <h5 class="card-title">
                        Catatan Meeting
                        <br>
                        <small>Tanggal Dibuat : {{ $root.indonesianDate(meeting.created_at) }} | Terkahir Perubahan : {{ $root.indonesianDate(meeting.updated_at) }}</small>
                    </h5>
                    <div class="card-text" v-html="meeting.note"></div>
                </div>
            </div>
            <NoData :desc="'Tidak ada Catatan Meeting'" />
        </div>
    </div>
</template>

<script>

import { VueEditor,Quill } from 'vue2-editor'
import axios from "axios";
import { ImageDrop } from 'quill-image-drop-module';

Quill.register("modules/imageDrop", ImageDrop);

export default {
    
    props: ['meeting', 'is_notulen'],

    components: {
        VueEditor
    },

    data:() => ({
        edit_mode: false,
        editorSettings: {
            modules: {
                imageDrop: true,
                // imageResize: {},
            }
        },
    }),

    mounted() {
        this.setNoteValue();
    },

    methods: {

        setNoteValue: function() {
            console.log(this.meeting.note);
            this.note = this.meeting.note;
        },

        handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {

            var formData = new FormData();
            formData.append("file", file);
            formData.append("meeting_id", this.$route.params.meeting_id);

            
            $.LoadingOverlay("show");

            axios({
                url: "/api/meeting/upload_note_image",
                method: "POST",
                data: formData,
            }).then(result => {
                let url = result.data.filePath; // Get url from response
                Editor.insertEmbed(cursorLocation, "image", url);
                resetUploader();
            }).catch(err => {
                alert('yukleme basarisiz! ' + err)
            })
            .then(() => {
                $.LoadingOverlay("hide");
            });
        },

        changeEditingMode: function() {
            if(this.edit_mode) {
                this.edit_mode = false;
            } else {
                this.edit_mode = true;
            }
        },
    }
};
</script>