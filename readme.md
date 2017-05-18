# React{commerce}

React{commerce} is a set of React components built to speed up your ecommerce website development. It relies on [Epic commerce](https://orkiv.com/epic-commerce) to function as your backend. Learn more about Epic commerce javascript functions [here](/Orkiv/Inventory-js)


# Navigation

- [Requirements](#requirements)
- [Install](#install)
- [Setup](#setup)
- [Components](#components)
	- [ItemFull](#itemfull)
	- [ItemImages](#itemimages)
	- [User](#user)
	- [Account button](#account)
	- [Checkout button](#checkout)
	- [ShowCart button](#showcart)
	- [ViewWishlist button](#viewwishlist)
	- [Logout button](#logout)
	- [One Click button](#oneclick)
	- [Cart button](#cart)
	- [Subscribe button](#subscribe) 
	- [Buy button](#buy) 
	- [Wishlist button](#wishlist) 
	- [Change CTA defaults](#changecta) 
	- [Combo cart field](#combocart)
	- [Combo buy field](#combobuy)    
- [CSS](#css)

# Requirements

- Epic commerce account
- jQuery
- [Inventory-js](/Orkiv/Inventory-js)
- ReactJS

# Testing 

Please launch a localhost server and open `react-test.hmtl`.


# Install

	npm install react-commerce


# Setup

Insert these tags after your `ReactJS` tag :

Initialize inventory:
	
	    <script type="text/javascript" src="inventory.js"></script>
    <script type="text/javascript">
     new Inventory("account_id","frontendkey",true, true);
    </script>

Load React{commerce}

	  <script type="text/babel" src="react-commerce.babel.js"></script>


# Components

Usage : 

	<{Component_name} ...props />

### ItemFull

Display full item view. 

** Use one per page.

#### Properties

- string id : commerce item id. 

### ItemImages

Display only item images

#### Properties

- string id : commerce item id.

### User

Display user login controls. If user is signed in, `<User />` will display account management controls.

### Account

Display button which will open a user account management modal.

#### Properties

 - string  text : Button call to action.


### Checkout

Display button which will open a checkout modal dialog.

### Checkout ShowCart

Display button which will open a direct checkout modal dialog.

### ViewWishlist

Display button which will open a modal with user's wishlist.

#### Properties

 - string text : Button call to action.


### Logout

Log current user out. ** Page will refresh.

#### Properties

 - string text : Button call to action.

### OneClick

Display button which will open a modal with a check out prompt.

#### Properties

 - string text : Button call to action.

### Cart

Add specified item id to user's cart.

#### Properties

To set variations, use the following format `var-{field-name}="value"`

- string id : commerce item id.


### Subscribe

Display button which will open a modal with a subscription prompt.

#### Properties

 - string id : service id.

### Buy

Open purchase modal dialog.

#### Properties

To set variations, use the following format `var-{field-name}="value"`

- string id : commerce item id.


### Wishlist

Add specified item id to user's wishlist.

#### Properties

To set variations, use the following format `var-{field-name}="value"`

- string id : commerce item id.


### ChangeCTA

Change global call to action prompts of React{commerce} components.

#### Properties

- string cta-cart-remove: Remove item from cart CTA.
- string cta-cart-add: Add to cart CTA.
- string cta-wishlist-remove: Remove item from wishlist CTA.
- string cta-wishlist-add : Add to wishlist CTA.
- string cta-checkout: Open checkout prompt.

### ComboCart

Add to cart button with explicit amount field.

#### Properties
To set variations, use the following format `var-{field-name}="value"`

- string id : commerce item id.


### ComboBuy

open item purchase modal dialog with explicit amount field.

#### Properties
To set variations, use the following format `var-{field-name}="value"`

- string id : commerce item id.


# CSS

Here are a set of css selectors to edit React{commerce} elements. Please make sure to set your new styles to `!important`.

React{commerce} Modals : 
			
			.inv-iframe-module.inventory-realm

React{commerce} Texts :

Titles :
		
		 .inv-iframe-module.inventory-realm h1,
		 .inv-iframe-module.inventory-realm h2,
		 .inv-iframe-module.inventory-realm h3,
		 .inv-iframe-module.inventory-realm h4

Paragraphs :

	.inv-iframe-module.inventory-realm p

Images :

	.inv-iframe-module.inventory-realm img


	

React{commerce} Buttons :

	.sync-orkivinv