<template>
    <div>
        <nav
            class="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
            <div class="navbar-container d-flex content">
                <PageHeader />
                <ul class="nav navbar-nav align-items-center ms-auto">
                    <li class="nav-item dropdown dropdown-language">
                        <a class="nav-link dropdown-toggle" id="dropdown-flag" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="flag-icon flag-icon-id"></i><span class="selected-language">Indonesia</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-flag">
                            <a class="dropdown-item" href="#" data-language="id">
                                <i class="flag-icon flag-icon-id"></i> Indonesia
                            </a>
                            <a class="dropdown-item" href="#" data-language="en">
                                <i class="flag-icon flag-icon-us"></i> English
                            </a>
                        </div>
                    </li>
                    <Notif />
                    <ProfileMenu />
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

import PageHeader from "@/components/partials/PageHeader";
import ProfileMenu from "@/components/partials/ProfileMenu";
import Notif from "@/components/partials/Notification";

export default {
    components: {
        ProfileMenu,
        PageHeader, 
        Notif
    }
}
</script>
