const {Color} = require('../enums');
module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Simple Inventory API',
        description: 'A simple Inventory API',
        version: '2.0.0',
    },
    tags: [
        {name: 'Categories CRUD operations'},
        {name: 'Products CRUD operations'},
        {name: 'Users CRUD operations'},
    ],
    components: {
        schemas: {
            id: {
                type: 'string',
                format: 'uuid',
            },
            Category: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid',
                    },
                    name: {
                        type: 'string',
                    },
                    description: {
                        type: 'string',
                    },
                    // products: {
                    //     'type': 'array',
                    //     'items': {
                    //         '$ref': '#/components/schemas/Product',
                    //     },
                    // },
                    createdAt: {
                        type: 'string',
                        format: 'date',
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date',
                    },
                },
            },
            Category_Create: {
                type: 'object',
                properties: {
                    description: {
                        type: 'string',
                    },
                    name: {
                        type: 'string',
                    },
                },
            },
            Product_Create: {
                type: 'object',
                properties: {
                    description: {
                        type: 'string',
                    },
                    name: {
                        type: 'string',
                    },
                    category: {
                        oneOf: [
                            {$ref: '#/components/schemas/id'},
                            {$ref: '#/components/schemas/Category'},
                        ],
                    },
                    color: {
                        type: 'string',
                        enum: Object.values(Color),
                    },
                    price: {
                        type: 'number',
                    },
                },
            },
            Product: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid',
                    },
                    description: {
                        type: 'string',
                    },
                    name: {
                        type: 'string',
                    },
                    category: {
                        oneOf: [
                            {$ref: '#/components/schemas/id'},
                            {$ref: '#/components/schemas/Category'},
                        ],
                    },
                    color: {
                        type: 'string',
                        enum: Object.values(Color),
                    },
                    price: {
                        type: 'number',
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date',
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date',
                    },
                },
            },
        },
    },
    paths: {
        '/api/product': {
            post: {
                tags: ['Products CRUD operations'],
                description: 'Create product',
                operationId: 'createProduct',
                parameters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Product_Create',
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: 'Product created successfully',
                    },
                    500: {
                        description: 'Server error',
                    },
                },
            },
            get: {
                tags: ['Products CRUD operations'],
                description: 'Get products',
                operationId: 'getProducts',
                parameters: [],
                responses: {
                    200: {
                        description: 'Todos were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Product',
                                },
                            },
                        },
                    },
                },
            },
        },
        '/api/product/{id}': {
            get: {
                tags: ['Products CRUD operations'],
                description: 'Retrieve a product by id',
                operationId: 'getProduct',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            $ref: '#/components/schemas/id',
                        },
                        required: true,
                        description: 'A single todo id',
                    },
                ],
                responses: {
                    200: {
                        description: 'Todo is obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Product',
                                },
                            },
                        },
                    },
                    404: {
                        description: 'Product not found',
                    },
                },
            },
        },
        '/api/category': {
            post: {
                tags: ['Categories CRUD operations'],
                description: 'Create category',
                operationId: 'createCategory',
                parameters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Category_Create',
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: 'Category created successfully',
                    },
                    500: {
                        description: 'Server error',
                    },
                },
            },
            get: {
                tags: ['Categories CRUD operations'],
                description: 'Get categories',
                operationId: 'getCategories',
                parameters: [],
                responses: {
                    200: {
                        description: 'Categories Fetched',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Category',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
