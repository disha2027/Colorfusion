import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Login from './Components/Login.js';
import Contact from './Components/Contact.js';
import Registration from './Components/Registration.js';
import Product from './Components/Product.js';
import Feedback from './Components/Feedback.js';
import Payment from './Components/Payment.js';
import Category from './Components/Category.js';
import ViewRegistration from './Components/ViewRegistration.js';
import ViewFeedback from './Components/ViewFeedback.js';
import ViewProduct from './Components/ViewProduct.js';
import ViewCategory from './Components/ViewCategory.js';
import ViewPayment from './Components/ViewPayment.js';
import UserHome from './Components/UserHome.js';
import AdminHome from './Components/AdminHome.js';
import ForgotPass from './Components/ForgotPass.js';
import OtpVerification from './Components/OtpVerification.js';
import ResetPass from './Components/ResetPass.js';
import Makeup from './Components/Categories/Makeup.js';
import Catwise from './Components/Catwise.js'; 
import Buy from './Components/Buy.js';
import Myorder from './Components/Myorder.js';
import Mycart from './Components/Mycart.js';
import PayBill from './Components/Paybill.js';
import Customerorder from './Components/Customerorder.js';
import PayBillNext from './Components/PayBillNext.js';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Registration}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/product" component={Product}></Route>
        <Route exact path="/feedback" component={Feedback}></Route>
        <Route exact path="/payment" component={Payment}></Route>
        <Route exact path="/category" component={Category}></Route>
        <Route exact path="/viewsignup" component={ViewRegistration}></Route>
        <Route exact path="/viewfeedback" component={ViewFeedback}></Route>
        <Route exact path="/viewproduct" component={ViewProduct}></Route>
        <Route exact path="/viewcategory" component={ViewCategory}></Route>
        <Route exact path="/viewpayment" component={ViewPayment}></Route>
        <Route exact path="/userhome" component={UserHome}></Route>
        <Route exact path="/adminhome" component={AdminHome}></Route>
        <Route exact path="/forgotpass" component={ForgotPass}></Route>
        <Route exact path="/otp" component={OtpVerification}></Route>
        <Route exact path="/resetpass" component={ResetPass}></Route>
        <Route exact path="/makeup" component={Makeup}></Route>
        <Route exact path="/catwise/:cat" component={Catwise}></Route>
        <Route exact path="/buy/:id" component={Buy}></Route>
        <Route exact path="/myorder" component={Myorder}></Route>
        <Route exact path="/mycart" component={Mycart}></Route>
        <Route exact path="/paybill/:id/:price" component={PayBill}></Route>
        <Route exact path="/customerorder" component={Customerorder}></Route>
        <Route exact path="/paybill_next/:price" component={PayBillNext}></Route>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
