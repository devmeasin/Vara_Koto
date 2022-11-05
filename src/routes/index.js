import {Home} from '../pages/Home';
import {Favorite} from '../pages/Favorite';
import {AboutUs} from '../pages/AboutUs';
import {TransportDetails} from '../pages/TransportDetails';
import {Notifications} from '../pages/Notifications';
import {Supports} from '../pages/Supports';
import {Contact} from '../pages/Contact';

// import {Profile} from '../pages/Profile';
// import SignIn from '../pages/SignIn';
// import Signup from '../pages/Signup';
// import ResetPassword from '../pages/ResetPassword';
// import Supports from '../pages/Supports';
// import OrderSummery from '../pages/OrderSummery';
// import ProductDetails from '../pages/ProductDetails';
// import ResetPasswordConfirm from '../pages/ResetPasswordConfirm';

// import OrderHistory from '../pages/OrderHistory';
// import Notifications from '../pages/Notifications';
// import Search from '../pages/Search/Search';

// import EditProfile from '../pages/EditProfile/EditProfile';

// import Reviews from '../pages/Reviews';
// import ProductListItem from '../pages/ProductList/ProductListItem';
// import LocationSearch from '../components/LocationSearch/LocationSearch/LocationSearch';

const router = [
	

	{
		path: '/',
		component: Home
	},
	{
		path: '/home',
		component: Home
	},

	{
		path: '/transport/:id',
		component: TransportDetails
	},

	{
		path: '/about-us',
		component: AboutUs
	},

	// {
	// 	path: '/profile',
	// 	component: Profile
	// },
	
	{
		path: '/favorite',
		component: Favorite
	},

	{
		path: '/notification',
		component: Notifications
	},

	{
		path: '/support',
		component: Supports
	},

	{
		path: '/contact',
		component: Contact
	},


	// {
	// 	path: '/signin',
	// 	component: Signin
	// },
	// {
	// 	path: '/signup',
	// 	component: Signup
	// },
	// {
	// 	path: '/reset-password',
	// 	component: ResetPassword
	// },
	// {
	// 	path: '/reset-password-confirm',
	// 	component: ResetPasswordConfirm
	// },


	// {
	// 	path: '/order-details/:id',
	// 	component: OrderSummery
	// },
	// {
	// 	path: '/search',
	// 	component: Search
	// },


	
]

export default router;