<?php


namespace App\maguttiCms\Website\Controllers\Store;


use App\Http\Controllers\Controller;
use App\maguttiCms\Domain\Cart\CartVieModel;

class CartController extends Controller
{
    public function __invoke()
    {

        $cart = new CartVieModel();
        return view('website.store.cart', compact('cart',));

    }
}