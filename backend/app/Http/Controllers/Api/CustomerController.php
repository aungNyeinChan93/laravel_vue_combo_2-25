<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::query()->get();
        return response()->json([
            'message' => 'success',
            'customers' => $customers,
        ]);
    }
}
