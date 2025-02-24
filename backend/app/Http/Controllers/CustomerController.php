<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    //index
    public function index()
    {
        $customers = Customer::query()->get();
        return view('customers.index', compact('customers'));
    }
}
