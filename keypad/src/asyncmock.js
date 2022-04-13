const products = [
    {
        id: '1',
        name: 'Alarma GSM 2G',
        price: '9990',
        description: 'Descripcion corta del primer producto y detalle',
        category: 'Alarmas',
        img: 'http://www.lifecam.cl/wp-content/uploads/2018/04/alarma-gsm-inalambrica-kit-seguridad-casa-oficina-empresa-d_nq_np_882201-mlc20287327224_042015-f.jpg'
    },
    {
        id: '2',
        name:'Camara Bullet 2MP',
        price: '8990',
        description: 'Descripcion corta del segundo producto y detalle',
        category: 'CCTV',
        img: 'https://ripleycl.imgix.net/https%3A%2F%2Fwww.solomon.cl%2Fwp-content%2Fuploads%2F2021%2F10%2FMAV933Q2-SOLOMON-1.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=f67a21aae0013ef03a0308fed9e76cd4'
    },
    {
        id: '3',
        name:'Control de acceso',
        price: '7990',
        description: 'Descripcion corta del tercer producto y detalle',
        category: 'Acceso y Video',
        img: 'https://dojiw2m9tvv09.cloudfront.net/15650/product/acc5079473.jpg'
    },
    {
        id: '4',
        name:'Router',
        price: '8990',
        description: 'Descripcion corta del cuarto producto y detalle',
        category: 'Redes',
        img: 'https://m.media-amazon.com/images/I/51oPXK4V5pL._AC_SS450_.jpg'
    }
]

const categories = [
    {id: 'CCTV', description: 'CCTV'},
    {id: 'Alarmas', description: 'Alarmas'},   
    {id:'Redes', description: 'Redes'},
    {id: 'Acceso y Video', description: 'Acceso y Video'},
    {id: 'Contactenos', description: 'Contactenos'}
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}