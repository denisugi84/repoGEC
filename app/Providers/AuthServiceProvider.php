<?php

namespace App\Providers;

use App\Models\Member;
use App\Models\Permission;
use Exception;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
        // Init Gate

        foreach (Permission::get() as $permission) {
            Gate::define($permission->slug, function ($user) use ($permission) {
                try {

                    $check_permissions = in_array($permission->slug, $this->getPermissions($user->member));

                    return $check_permissions;
                } catch (Exception $e) {
                    throw new Exception($e);
                }
            });
        }
    }

    private function getPermissions(Member $member)
    {
        $permissions = $member->title->permission->pluck('slug')->toArray();

        return array_unique($permissions);
    }
}
