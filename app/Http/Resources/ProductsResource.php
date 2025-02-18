<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'product_code' => $this->product_code,
            'product_name' => $this->product_name,
            'category_id' => $this->category->name,
            'product_price' => 'Rp. '.number_format($this->product_price,0,',','.'),
            'product_profit_price' => 'Rp. '.number_format($this->product_profit_price,0,',','.'),
            'product_stock' => $this->product_stock,
            'product_periode' => $this->product_periode == 'Lifetime' ? 'Lifetime' : $this->product_periode.' Tahun',
            'status' => $this->status,
        ];
    }
}
