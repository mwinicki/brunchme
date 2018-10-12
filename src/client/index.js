import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export default class RadioSearch extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        zip: '',
        feature: '',
        price: '',
        restaurants: [],
      };
   
this.handleZipChange = this.handleZipChange.bind(this);
this.handleFeatureChange = this.handleFeatureChange.bind(this);
this.handlePriceChange = this.handlePriceChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
 
}

 handleZipChange(event) {
    this.setState({
      zip: event.target.value,
    }); 
 }
 handleFeatureChange(event) {
  this.setState({
    feature: event.target.value,
  }); 
}
handlePriceChange(event) {
  this.setState({
    price: event.target.value,
  }); 
}
 handleSubmit(event) {
    event.preventDefault();
    let that = this;
    fetch("/api/restaurantsQuery?postalCode=" + this.state.zip + '&' + 'features=' + this.state.feature + '&' + 'priceRange=' + this.state.price)


    .then(function (data) { return data.json();})
    .then(function(data) {
     that.setState({
       restaurants: data,
     })
  })

    alert(`Thanks for letting us know, we'll grab some options for you.`);
    return false
 }

    
render() {
  const restaurantList = this.state.restaurants.map((restaurant) => 
  <div className = "restaurantDiv" key={restaurant._id}>{restaurant.name}<br/>
  <div className= "address">{restaurant.fullAddress}</div>
  <div className="phone">{restaurant.telephone}</div>
  </div>
  ); 
    return (
      <div>
    <form onSubmit={this.handleSubmit}>
    <div className= "formWrapper">
    <br/>
   <div className="zip">
    Location:
    <br/>
        <input 
        type="radio"
        name="zip"
        value="78701" 
        checked={this.state.zip === "78701"}
        onChange={this.handleZipChange}
        />
        78701

        <input 
        type="radio" 
        name="zip"
        value="78702" 
        checked={this.state.zip === "78702"}
        onChange={this.handleZipChange}
        />
        78702

        <input 
        type="radio" 
        name="zip"
        value="78745" 
        checked={this.state.zip === "78745"}
        onChange={this.handleZipChange}
        />
        78745
        </div>
        <br/>

      <div className="features">

      Features:
      <br/>

        <input 
        type="radio" 
        name="feature"
        value="mimosas" 
        checked={this.state.feature === "mimosas"}
        onChange={this.handleFeatureChange}
        />
        Mimosas

        <input 
        type="radio"
        name="feature"
        value="patio" 
        checked={this.state.feature === "patio"}
        onChange={this.handleFeatureChange}
        />
        Patio Seating

        <input 
        type="radio" 
        name="feature"
        value="buffet" 
        checked={this.state.feature === "buffet"}
        onChange={this.handleFeatureChange}
        />
        Buffet
      </div>
      <br/>

        <div className="price">
        Price:
        <br/>
         <input 
         type="radio" 
         value="Under $10" 
         checked={this.state.price === "Under $10"}
         onChange={this.handlePriceChange}
         />
         $

         <input 
         type="radio" 
         value="$11-30" 
         checked={this.state.price === "$11-30"}
         onChange={this.handlePriceChange}
         />
         $$
        <input 
        type="radio" 
         value="$31-60" 
         checked={this.state.price === "$31-60"}
         onChange={this.handlePriceChange}
         />
         $$$
         </div>
         <br/>
         <br/>
    

    </div>
    <input type="submit" className="submit-button" value="Submit"></input>
    </form>
    
    <br/>
    <br/>
    <div class="brunchpic">


    </div>
   {restaurantList}
    <div>{this.props.children}</div>
    </div>
    );
    
}

 }



ReactDOM.render(<RadioSearch />, document.getElementById('root'));