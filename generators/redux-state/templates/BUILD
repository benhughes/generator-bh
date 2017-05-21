subinclude('//infrastructure/build_defs:javascript')

js_library(
    name = 'actions',
    srcs = [
        'actions.js',
    ],
    visibility = [
        '//vault/admin_app/frontend/app/',
    ],
)

js_library(
    name = 'reducers',
    srcs = [
        'reducers.js',
    ],
    deps = [
        ':actions',
    ],
    visibility = [
        '//vault/admin_app/frontend/app/',
    ],
)

js_library(
    name = 'consts',
    srcs = [
        'consts.js',
    ],
    visibility = [
        '//vault/admin_app/frontend/app/',
    ],
)
