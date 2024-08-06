<?php

/*
 * This file is part of fof/webhooks.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasColumn('webhooks', 'max_post_content_length')) {
            return;
        }
        $schema->table('webhooks', function (Blueprint $table) {
            $table->unsignedInteger('max_post_content_length')->nullable();
        });
    },
    'down' => function (Builder $schema) {
        if ($schema->hasColumn('webhooks', 'max_post_content_length')) {
            $schema->table('webhooks', function (Blueprint $table) {
                $table->dropColumn('max_post_content_length');
            });;
        }
    },
];
