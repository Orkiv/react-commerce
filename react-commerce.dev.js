import React from 'react'

class ItemFull  extends React.Component {
 
      render() {
        var id = makeid(10);
        var _binst = this;
         setTimeout(function(){
        $inventoryStandard.DefaultLayout(_binst.props.id , "[data-targ='" + id + "']");
      }, 600 );
        return <div data-targ={ id }></div>;
      }
    }

     class ItemImages  extends React.Component {
 
      render() {
        var id = makeid(10);
        $inventoryStandard.ImageGrid(this.props.id , "[data-targ='" + id + "']");
        return <div data-targ={ id }></div>;
      }
    }

    class User  extends React.Component {
 
      render() {
        var id = makeid(10);
        setTimeout(function(){
        $inventoryStandard.CreateSocialSupport( "[data-targ='" + id + "']", [ "[data-targ='" + id + "']"]);
        }, 600 );
        return <div data-targ={ id }></div>;
      }
    }

   


    class Account  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          $("[data-targ='" + id +"']").append('<button onclick="$inventoryStandard.ShowAccount()" class="sync-orkivinv"> ' + (!_binst.props.text ? "Account" : _binst.props.text) + "</button>");
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }

      class Checkout  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          $("[data-targ='" + id +"']").append('<button onclick="$inventoryStandard.Checkout()" class="sync-orkivinv acu-sync-cart"> CART </button>');
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }

        class ShowCart  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          $("[data-targ='" + id +"']").append('<button onclick="$inventoryStandard.ShowCart()" class="sync-orkivinv acu-sync-cart"> CART </button>');
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }

    class Currency extends React.Component {
          render() {
              return  $currency;
          }
    }

    class ViewWishlist  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          $("[data-targ='" + id +"']").append('<button onclick="$inventoryStandard.ShowWishlist()" class="sync-orkivinv"> ' + (!_binst.props.text ? "Wishlist" : _binst.props.text) + "</button>");
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }

   class Logout  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          $("[data-targ='" + id +"']").append('<button onclick="$inventoryStandard.DestroyUserinfo()" class="sync-orkivinv"> ' + (!_binst.props.text ? "Logout" : _binst.props.text) + "</button>");
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }

       class OneClick  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          $("[data-targ='" + id +"']").append('<button onclick="$inventoryStandard.OneClick()" class="sync-orkivinv"> ' + (!_binst.props.text ? "One click" : _binst.props.text) + "</button>");
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }


    class Cart  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          var variations = "";
          var var_array = [];
          for(var key in _binst.props){
            if(key.indexOf("var-") != -1){
              var_array.push(key.replace("var-", "") + ":" + _binst.props[key] )
            }
          }
          if(var_array.length > 0){
            variations = "'";
            variations += var_array.join("','");
            variations += "'"
          }

          $("[data-targ='" + id +"']").append('<button onclick="$inventoryStandard.Cart(\'' + _binst.props.id +'\',1,[' + variations  + '])" data-id="' + _binst.props.id + (var_array.length > 0 ? "%^}" + var_array.join("%^}") : "") + '" data-link="cart" class="sync-orkivinv sync-dynamic"> ' +  "</button>");
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }

    class Subscribe  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          $("[data-targ='" + id +"']").append('<button onclick="$inventoryStandard.BuyService(\'' + _binst.props.id + '\')" class="sync-orkivinv"> ' + (!_binst.props.text ? "Subscribe" : _binst.props.text) + "</button>");
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }

 

        class Buy  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          var variations = "";
          var var_array = [];
          for(var key in _binst.props){
            if(key.indexOf("var-") != -1){
              var_array.push(key.replace("var-", "") + ":" + _binst.props[key] )
            }
          }
          if(var_array.length > 0){
            variations = "'";
            variations += var_array.join("','");
            variations += "'"
          }

          $("[data-targ='" + id +"']").append('<button onclick="$inventoryStandard.Buy(\'' + _binst.props.id +'\',1,[' + variations  + '])" class="sync-orkivinv"> ' + (_binst.props.text ? _binst.props.text : "BUY") +  "</button>");
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }

       class Wishlist  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          var variations = "";
          var var_array = [];
          for(var key in _binst.props){
            if(key.indexOf("var-") != -1){
              var_array.push(key.replace("var-", "") + ":" + _binst.props[key] )
            }
          }
          if(var_array.length > 0){
            variations = "'";
            variations += var_array.join("','");
            variations += "'"
          }

          $("[data-targ='" + id +"']").append('<button onclick="$inventoryStandard.Wishlist(\'' + _binst.props.id +'\',1,[' + variations  + '])" data-id="' + _binst.props.id + (var_array.length > 0 ? "%^}" + var_array.join("%^}") : "") + '" data-link="wishlist" class="sync-orkivinv sync-dynamic"> ' +  "</button>");
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }

    
   class ChangeCTA  extends React.Component {
         render() {
          if(this.props['cta-cart-remove']){
            $global_cta.cartr = this.props['cta-cart-remove'];
          }
          if(this.props['cta-cart-add']){
             $global_cta.carta = this.props['cta-cart-add'];
          }
          if(this.props['cta-wishlist-remove']){
             $global_cta.wishr = this.props['cta-wishlist-remove'];
          }
          if(this.props['cta-wishlist-add']){
             $global_cta.wisha = this.props['cta-wishlist-add'];
          }
          if(this.props['cta-checkout']){
               $global_cta.cart = this.props['cta-checkout'];
          }

          $inventoryStandard.SyncDynamic();

          return <orkiv-div-cta-updated> </orkiv-div-cta-updated>
         }
    }

    class ComboCart  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          var variations = "";
          var var_array = [];
          for(var key in _binst.props){
            if(key.indexOf("var-") != -1){
              var_array.push(key.replace("var-", "") + ":" + _binst.props[key] )
            }
          }
          if(var_array.length > 0){
            variations = "'";
            variations += var_array.join("','");
            variations += "'"
          }

          $("[data-targ='" + id +"']").append(' <div class="inventory-form-group" data-type="cart" data-id="' + _binst.props.id + (var_array.length > 0 ? "%^}" + var_array.join("%^}") : "") + '"><input min="0" type="number" data-isf="amt" placeholder="Amount" /><button onclick="$inventoryStandard.ExplicitCart(\'' + _binst.props.id +'\',[' + variations  + '])")" class="sync-orkivinv" ><i class="fa fa-shopping-cart"></i></button></div>');
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }



     class ComboBuy  extends React.Component {
 
      render() {
       var id = makeid(10);
          var _binst = this;
         setTimeout(function(){
          var variations = "";
          var var_array = [];
          for(var key in _binst.props){
            if(key.indexOf("var-") != -1){
              var_array.push(key.replace("var-", "") + ":" + _binst.props[key] )
            }
          }
          if(var_array.length > 0){
            variations = "'";
            variations += var_array.join("','");
            variations += "'"
          }

          $("[data-targ='" + id +"']").append(' <div class="inventory-form-group" data-type="buy" data-id="' + _binst.props.id + (var_array.length > 0 ? "%^}" + var_array.join("%^}") : "") + '"><input min="0" type="number" data-isf="amt" placeholder="Amount" /><button onclick="$inventoryStandard.ExplicitBuy(\'' + _binst.props.id +'\',[' + variations  + '])")" class="sync-orkivinv" ><i class="fa fa-credit-card"></i></button></div>');
        $inventoryStandard.SyncDynamic();
        }, 200 );
        return <orkiv-div class="inventory-realm" data-targ={ id }></orkiv-div>;
      
      }
    }

