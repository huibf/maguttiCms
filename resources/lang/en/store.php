<?php

return [
	'product' => [
		'code' => 'Code',
		'price' => 'Price'
	],

	'cart' => [
        'checkout' => 'Checkout',
        'continue' => 'Continue',
        'confirm' => 'Confirm your data',
		'title' => 'Shopping Bag',
		'total' => 'Total',
		'empty' => 'Your Shopping bag is empty',
        'edit_address'=>'Edit Address',
        'edit_payment_method' => 'Edit Payment Method',
		'buy' => 'Checkout',
		'back' => 'Back to the store',
        'number_of_items' => 'Items',
        'show_detail'=>'show details',
        'optional' => 'optional',
        'with_tax'=>'VAT Incl.',
		'table' => [
			'code' => 'Code',
			'name' => 'Product',
			'quantity' => 'Quantity',
			'price' => 'Price',
			'total' => 'Total',
			'actions' => 'Actions'
		],
        'step'=>[
            'next_payment' =>'Next: Payment Method',
            'next_send' =>'Next: Send Order ',
            'next_confirm' =>'Next: Confirm Order ',

        ]
	],

	'shipping' => [
		'free' => 'Free shipping'
	],

	'items' => [
		'add' => 'Add to cart',
        'are_you_sure_to_remove' => 'Are you Sure to remove this item from your cart?',
		'remove' => 'Remove from cart'
	],

	'alerts' => [
		'add_success' => 'Product added to your cart',
		'add_fail' => 'Unable to add the product to the cart',
		'remove_success' => 'Product removed from cart',
		'remove_fail' => 'Unable to remove the product from the cart',
		'cart_invalid' => 'Invalid cart',
		'cart_empty' => 'The cart is empty',
		'order_success' => 'Order submitted correctly',
		'order_fail' => 'Unable to submit the order',

		'payment_fail' => 'Payment failed',
		'payment_already_paid' => 'The order has already been paid',
		'payment_success' => 'Payment succesful',
	],

	'order' => [
		'guard' => 'An account is required to continue',
		'login' => 'Login',
		'register' => 'Create a new account',
		'title' => 'Order Summary',
		'back' => 'Back to cart',
		'resume' => 'Products review',
		'addresses' => 'Addresses',
		'totals' => 'Costs review',
		'confirm' => 'Send Your Order',
		'payment' => 'Payment method',
		'billing' => 'Billing address',
		'billing_different_address' => 'The billing address is the same as the shipping address',
		'shipping' => 'Shipping address',
		'products_cost' => 'Products cost',
		'shipping_cost' => 'Shipping cost',
        'registered_user' => 'Registered user',
        'registered_user_login_message'  => 'Log in to recall your saved details and speed up your purchase.',
        'guest_checkout'  => 'Guest Checkout',
        'guest_checkout_countinue'  => 'Continue as Guest',
        'guest_checkout_message'  => 'Don\'t have any account? You can check out without logging in. 
        You will be able to register after completing your order for faster checkout and access to order history. ',

        'vat_cost' => 'VAT',
		'total_cost' => 'Order total',
		'discount' => [
			'title' => 'Discount coupon',
			'insert' => 'If you have a discount coupon code type it here.',
			'valid' => 'Coupon found: sconto %s',
			'invalid' => 'This code is invalid.',
            'add' =>' Add a discount code',
            'enter'=>'Enter discount code',
            'apply'=>'Apply discount code',
            'delete'=>'Delete',
            'are_you_sure_to_remove' => 'Are you Sure to remove your coupon from your cart?',
		]
	],

	'payment' => [
		'title' => 'Payment result',
		'pay' => 'Pay the order',
		'method' => 'Payment Method',
		'paid' => 'Paid',
		'unpaid' => 'Unpaid',
		'back' => 'Back to the order',
	],

	'address' => [
		'new' => 'Add new address',
		'fields' => [
			'street' => 'Street',
			'number' => 'Number',
			'zip_code' => 'ZIP',
			'city' => 'City',
			'province' => 'Province/State',
			'country' => 'Country',
			'phone' => 'Phone',
			'mobile' => 'Mobile',
			'email' => 'Email',
			'vat' => 'VAT number'
		],
		'save' => 'Save'
	],

	'dashboard' => [
		'orders' => 'Orders',
		'addresses' => 'Addresses',
		'table' => [
			'products' => 'Products',
			'total' => 'Total',
			'payment' => 'Payment',
			'paid' => 'Paid',
			'date' => 'Date'
		]
	],

	'paypal' => [
		'items_total' => 'Products total'
	]
];
