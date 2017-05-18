"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemFull = function (_React$Component) {
  _inherits(ItemFull, _React$Component);

  function ItemFull() {
    _classCallCheck(this, ItemFull);

    return _possibleConstructorReturn(this, (ItemFull.__proto__ || Object.getPrototypeOf(ItemFull)).apply(this, arguments));
  }

  _createClass(ItemFull, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        $inventoryStandard.DefaultLayout(_binst.props.id, "[data-targ='" + id + "']");
      }, 600);
      return _react2.default.createElement("div", { "data-targ": id });
    }
  }]);

  return ItemFull;
}(_react2.default.Component);

var ItemImages = function (_React$Component2) {
  _inherits(ItemImages, _React$Component2);

  function ItemImages() {
    _classCallCheck(this, ItemImages);

    return _possibleConstructorReturn(this, (ItemImages.__proto__ || Object.getPrototypeOf(ItemImages)).apply(this, arguments));
  }

  _createClass(ItemImages, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      $inventoryStandard.ImageGrid(this.props.id, "[data-targ='" + id + "']");
      return _react2.default.createElement("div", { "data-targ": id });
    }
  }]);

  return ItemImages;
}(_react2.default.Component);

var User = function (_React$Component3) {
  _inherits(User, _React$Component3);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      setTimeout(function () {
        $inventoryStandard.CreateSocialSupport("[data-targ='" + id + "']", ["[data-targ='" + id + "']"]);
      }, 600);
      return _react2.default.createElement("div", { "data-targ": id });
    }
  }]);

  return User;
}(_react2.default.Component);

var Account = function (_React$Component4) {
  _inherits(Account, _React$Component4);

  function Account() {
    _classCallCheck(this, Account);

    return _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).apply(this, arguments));
  }

  _createClass(Account, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        $("[data-targ='" + id + "']").append('<button onclick="$inventoryStandard.ShowAccount()" class="sync-orkivinv"> ' + (!_binst.props.text ? "Account" : _binst.props.text) + "</button>");
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return Account;
}(_react2.default.Component);

var Checkout = function (_React$Component5) {
  _inherits(Checkout, _React$Component5);

  function Checkout() {
    _classCallCheck(this, Checkout);

    return _possibleConstructorReturn(this, (Checkout.__proto__ || Object.getPrototypeOf(Checkout)).apply(this, arguments));
  }

  _createClass(Checkout, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        $("[data-targ='" + id + "']").append('<button onclick="$inventoryStandard.Checkout()" class="sync-orkivinv acu-sync-cart"> CART </button>');
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return Checkout;
}(_react2.default.Component);

var ShowCart = function (_React$Component6) {
  _inherits(ShowCart, _React$Component6);

  function ShowCart() {
    _classCallCheck(this, ShowCart);

    return _possibleConstructorReturn(this, (ShowCart.__proto__ || Object.getPrototypeOf(ShowCart)).apply(this, arguments));
  }

  _createClass(ShowCart, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        $("[data-targ='" + id + "']").append('<button onclick="$inventoryStandard.ShowCart()" class="sync-orkivinv acu-sync-cart"> CART </button>');
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return ShowCart;
}(_react2.default.Component);

var Currency = function (_React$Component7) {
  _inherits(Currency, _React$Component7);

  function Currency() {
    _classCallCheck(this, Currency);

    return _possibleConstructorReturn(this, (Currency.__proto__ || Object.getPrototypeOf(Currency)).apply(this, arguments));
  }

  _createClass(Currency, [{
    key: "render",
    value: function render() {
      return $currency;
    }
  }]);

  return Currency;
}(_react2.default.Component);

var ViewWishlist = function (_React$Component8) {
  _inherits(ViewWishlist, _React$Component8);

  function ViewWishlist() {
    _classCallCheck(this, ViewWishlist);

    return _possibleConstructorReturn(this, (ViewWishlist.__proto__ || Object.getPrototypeOf(ViewWishlist)).apply(this, arguments));
  }

  _createClass(ViewWishlist, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        $("[data-targ='" + id + "']").append('<button onclick="$inventoryStandard.ShowWishlist()" class="sync-orkivinv"> ' + (!_binst.props.text ? "Wishlist" : _binst.props.text) + "</button>");
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return ViewWishlist;
}(_react2.default.Component);

var Logout = function (_React$Component9) {
  _inherits(Logout, _React$Component9);

  function Logout() {
    _classCallCheck(this, Logout);

    return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
  }

  _createClass(Logout, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        $("[data-targ='" + id + "']").append('<button onclick="$inventoryStandard.DestroyUserinfo()" class="sync-orkivinv"> ' + (!_binst.props.text ? "Logout" : _binst.props.text) + "</button>");
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return Logout;
}(_react2.default.Component);

var OneClick = function (_React$Component10) {
  _inherits(OneClick, _React$Component10);

  function OneClick() {
    _classCallCheck(this, OneClick);

    return _possibleConstructorReturn(this, (OneClick.__proto__ || Object.getPrototypeOf(OneClick)).apply(this, arguments));
  }

  _createClass(OneClick, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        $("[data-targ='" + id + "']").append('<button onclick="$inventoryStandard.OneClick()" class="sync-orkivinv"> ' + (!_binst.props.text ? "One click" : _binst.props.text) + "</button>");
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return OneClick;
}(_react2.default.Component);

var Cart = function (_React$Component11) {
  _inherits(Cart, _React$Component11);

  function Cart() {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
  }

  _createClass(Cart, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        var variations = "";
        var var_array = [];
        for (var key in _binst.props) {
          if (key.indexOf("var-") != -1) {
            var_array.push(key.replace("var-", "") + ":" + _binst.props[key]);
          }
        }
        if (var_array.length > 0) {
          variations = "'";
          variations += var_array.join("','");
          variations += "'";
        }

        $("[data-targ='" + id + "']").append('<button onclick="$inventoryStandard.Cart(\'' + _binst.props.id + '\',1,[' + variations + '])" data-id="' + _binst.props.id + (var_array.length > 0 ? "%^}" + var_array.join("%^}") : "") + '" data-link="cart" class="sync-orkivinv sync-dynamic"> ' + "</button>");
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return Cart;
}(_react2.default.Component);

var Subscribe = function (_React$Component12) {
  _inherits(Subscribe, _React$Component12);

  function Subscribe() {
    _classCallCheck(this, Subscribe);

    return _possibleConstructorReturn(this, (Subscribe.__proto__ || Object.getPrototypeOf(Subscribe)).apply(this, arguments));
  }

  _createClass(Subscribe, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        $("[data-targ='" + id + "']").append('<button onclick="$inventoryStandard.BuyService(\'' + _binst.props.id + '\')" class="sync-orkivinv"> ' + (!_binst.props.text ? "Subscribe" : _binst.props.text) + "</button>");
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return Subscribe;
}(_react2.default.Component);

var Buy = function (_React$Component13) {
  _inherits(Buy, _React$Component13);

  function Buy() {
    _classCallCheck(this, Buy);

    return _possibleConstructorReturn(this, (Buy.__proto__ || Object.getPrototypeOf(Buy)).apply(this, arguments));
  }

  _createClass(Buy, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        var variations = "";
        var var_array = [];
        for (var key in _binst.props) {
          if (key.indexOf("var-") != -1) {
            var_array.push(key.replace("var-", "") + ":" + _binst.props[key]);
          }
        }
        if (var_array.length > 0) {
          variations = "'";
          variations += var_array.join("','");
          variations += "'";
        }

        $("[data-targ='" + id + "']").append('<button onclick="$inventoryStandard.Buy(\'' + _binst.props.id + '\',1,[' + variations + '])" class="sync-orkivinv"> ' + (_binst.props.text ? _binst.props.text : "BUY") + "</button>");
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return Buy;
}(_react2.default.Component);

var Wishlist = function (_React$Component14) {
  _inherits(Wishlist, _React$Component14);

  function Wishlist() {
    _classCallCheck(this, Wishlist);

    return _possibleConstructorReturn(this, (Wishlist.__proto__ || Object.getPrototypeOf(Wishlist)).apply(this, arguments));
  }

  _createClass(Wishlist, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        var variations = "";
        var var_array = [];
        for (var key in _binst.props) {
          if (key.indexOf("var-") != -1) {
            var_array.push(key.replace("var-", "") + ":" + _binst.props[key]);
          }
        }
        if (var_array.length > 0) {
          variations = "'";
          variations += var_array.join("','");
          variations += "'";
        }

        $("[data-targ='" + id + "']").append('<button onclick="$inventoryStandard.Wishlist(\'' + _binst.props.id + '\',1,[' + variations + '])" data-id="' + _binst.props.id + (var_array.length > 0 ? "%^}" + var_array.join("%^}") : "") + '" data-link="wishlist" class="sync-orkivinv sync-dynamic"> ' + "</button>");
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return Wishlist;
}(_react2.default.Component);

var ChangeCTA = function (_React$Component15) {
  _inherits(ChangeCTA, _React$Component15);

  function ChangeCTA() {
    _classCallCheck(this, ChangeCTA);

    return _possibleConstructorReturn(this, (ChangeCTA.__proto__ || Object.getPrototypeOf(ChangeCTA)).apply(this, arguments));
  }

  _createClass(ChangeCTA, [{
    key: "render",
    value: function render() {
      if (this.props['cta-cart-remove']) {
        $global_cta.cartr = this.props['cta-cart-remove'];
      }
      if (this.props['cta-cart-add']) {
        $global_cta.carta = this.props['cta-cart-add'];
      }
      if (this.props['cta-wishlist-remove']) {
        $global_cta.wishr = this.props['cta-wishlist-remove'];
      }
      if (this.props['cta-wishlist-add']) {
        $global_cta.wisha = this.props['cta-wishlist-add'];
      }
      if (this.props['cta-checkout']) {
        $global_cta.cart = this.props['cta-checkout'];
      }

      $inventoryStandard.SyncDynamic();

      return _react2.default.createElement(
        "orkiv-div-cta-updated",
        null,
        " "
      );
    }
  }]);

  return ChangeCTA;
}(_react2.default.Component);

var ComboCart = function (_React$Component16) {
  _inherits(ComboCart, _React$Component16);

  function ComboCart() {
    _classCallCheck(this, ComboCart);

    return _possibleConstructorReturn(this, (ComboCart.__proto__ || Object.getPrototypeOf(ComboCart)).apply(this, arguments));
  }

  _createClass(ComboCart, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        var variations = "";
        var var_array = [];
        for (var key in _binst.props) {
          if (key.indexOf("var-") != -1) {
            var_array.push(key.replace("var-", "") + ":" + _binst.props[key]);
          }
        }
        if (var_array.length > 0) {
          variations = "'";
          variations += var_array.join("','");
          variations += "'";
        }

        $("[data-targ='" + id + "']").append(' <div class="inventory-form-group" data-type="cart" data-id="' + _binst.props.id + (var_array.length > 0 ? "%^}" + var_array.join("%^}") : "") + '"><input min="0" type="number" data-isf="amt" placeholder="Amount" /><button onclick="$inventoryStandard.ExplicitCart(\'' + _binst.props.id + '\',[' + variations + '])")" class="sync-orkivinv" ><i class="fa fa-shopping-cart"></i></button></div>');
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return ComboCart;
}(_react2.default.Component);

var ComboBuy = function (_React$Component17) {
  _inherits(ComboBuy, _React$Component17);

  function ComboBuy() {
    _classCallCheck(this, ComboBuy);

    return _possibleConstructorReturn(this, (ComboBuy.__proto__ || Object.getPrototypeOf(ComboBuy)).apply(this, arguments));
  }

  _createClass(ComboBuy, [{
    key: "render",
    value: function render() {
      var id = makeid(10);
      var _binst = this;
      setTimeout(function () {
        var variations = "";
        var var_array = [];
        for (var key in _binst.props) {
          if (key.indexOf("var-") != -1) {
            var_array.push(key.replace("var-", "") + ":" + _binst.props[key]);
          }
        }
        if (var_array.length > 0) {
          variations = "'";
          variations += var_array.join("','");
          variations += "'";
        }

        $("[data-targ='" + id + "']").append(' <div class="inventory-form-group" data-type="buy" data-id="' + _binst.props.id + (var_array.length > 0 ? "%^}" + var_array.join("%^}") : "") + '"><input min="0" type="number" data-isf="amt" placeholder="Amount" /><button onclick="$inventoryStandard.ExplicitBuy(\'' + _binst.props.id + '\',[' + variations + '])")" class="sync-orkivinv" ><i class="fa fa-credit-card"></i></button></div>');
        $inventoryStandard.SyncDynamic();
      }, 200);
      return _react2.default.createElement("orkiv-div", { "class": "inventory-realm", "data-targ": id });
    }
  }]);

  return ComboBuy;
}(_react2.default.Component);
