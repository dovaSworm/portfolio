<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit34757c0f39a60d0acd4e503d6d38f02b
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit34757c0f39a60d0acd4e503d6d38f02b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit34757c0f39a60d0acd4e503d6d38f02b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
