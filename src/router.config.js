import home from './components/home.vue';
import books from './components/books.vue';
import error from './components/error.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import user from './components/user.vue';
import write from './components/write.vue';
import booklist from './components/booklist.vue';
import bookinfo from './components/bookinfo.vue';
import book from './components/book.vue';

const routes=[
    {path:'/home',component:home},
    {name:'books',path:'/books/:aid',component:books},
    {name:'book',path:'/book/:aid',component:book},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/user',component:user},
    {path:'/write',component:write},
    {name:'booklist',path:'/booklist',component:booklist},
    {name:'bookinfo',path:'/bookinfo',component:bookinfo},
    {path:'/',redirect:'/home'},
    {path:'*',component:error}
];
export default{
    routes
}
