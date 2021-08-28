const {getItem,getItems,addItem,deleteItem,updateItem}=require('../controllers/items')

//Item Schema
const Item={
    type:'object',
    properties:{
        id:{type:'string'},
        name:{type:'string'}
    },
}

//Options for get all items
const getItemsOpts={
    schema:{
        response:{
            200:{
                type:'array',
                items:Item,
            },
        },
    },
    handler: getItems,
}

const getItemOpt={
    schema:{
        response:{
            200:Item,
        },
    },
    handler:getItem,
}

const postItemOpt={
    schema:{
        body:{
            type:'object',
            required:['name'],
            properties:{
                name:{type:'string'},
            }
        },
        response:{
            201:Item,
        },
    },
    handler:addItem,
}

const deleteItemOpt={
    schema:{
        response:{
            200:{
                type:'object',
                properties:{
                    message:{type:'string'}
                }
            },
        },
    },
    handler:deleteItem,
}

const updateItemOpt={
    schema:{
        response:{
            200:Item,
        },
    },
    handler:updateItem,
}

function itemRoutes(fastify,options,done){
    //GET all items
    fastify.get('/items',getItemsOpts)
    
    //GET items by id
    fastify.get('/items/:id',getItemOpt)
    
    //Add item
    fastify.post('/items',postItemOpt)

    //Delete item
    fastify.delete('/items/:id',deleteItemOpt)
    
    //Update Item item
    fastify.put('/items/:id',updateItemOpt)
    
    done()
}

module.exports=itemRoutes