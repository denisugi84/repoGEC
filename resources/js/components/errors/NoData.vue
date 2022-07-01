<template>
    <div class="card">
        <center style="margin-top: 100px">
            <Logo
                style="width: 180px"
            />
            <div class="mb-2 mt-2">
                <hr style="width: 60%; margin-bottom: 10px;" />
            </div>
            <div id="error" style="margin-top: -60px">
                <div class="error">
                    <h1 class="mb-0" style="font-size: 35px;">
                        Ooopss..
                        <br />
                    </h1>
                    <p style="font-size: 18px; margin-top: 5px;">
                        {{ desc ? desc : "Tidak Ada Data" }}
                    </p>
                    <slot name="button"></slot>
                </div>
            </div>
        </center>
    </div>
</template>

<script>
export default {
    props: ["desc"]
    // title: 'Page Not Found',
};
</script>

<style scoped>
#error {
    position: relative;
    height: 250px;
}

#error .error {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.error {
    max-width: 520px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
}

.error .error-403 {
    position: relative;
    height: 240px;
    margin-top: -100px;
}

.error .error-403 h1 {
    font-family: "Montserrat", sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 42px;
    font-weight: 900;
    margin: 0px;
    color: #13619a;
    text-transform: uppercase;
    /* letter-spacing: -40px; */
    margin-left: -20px;
    white-space: nowrap;
}

.error .error-403 h1 > span {
    text-shadow: -8px 0px 0px #fff;
}

.error .error-403 h3 {
    font-family: "Cabin", sans-serif;
    position: relative;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #13619a;
    margin: 0px;
    letter-spacing: 3px;
    padding-left: 6px;
}

.error h2 {
    font-family: "Cabin", sans-serif;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    color: #000;
    margin-top: 0px;
    margin-bottom: 25px;
}

@media only screen and (max-width: 767px) {
    .error .error-403 {
        height: 200px;
    }

    .error .error-403 h1 {
        font-size: 200px;
    }
}

@media only screen and (max-width: 480px) {
    .error .error-403 {
        height: 162px;
    }

    .error .error-403 h1 {
        font-size: 162px;
        height: 60px;
        line-height: 60px;
    }

    .error h2 {
        font-size: 16px;
    }
}
</style>
