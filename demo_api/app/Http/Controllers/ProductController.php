<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function infoList(){
        $user = DB::table('user')
            ->get();

            return  $user;
    }

    public function insert(Request $req){

        DB::table('user')->insert(
            ['Name' => $req->Name,
            'username' => $req->username,
             'contact_no' => $req->contact_no,
            'password' => '123'
        ]);
            //$this->infoList();
            return 'OK';  
    }

    public function infoWithID($id){
        $user = DB::table('user')
        ->where('id',$id)
            ->get();

            return  $user;
    }

    public function update(Request $req,$id){

            DB::table('user')
            ->where('id', $id)
            ->update([
                'Name' => $req->Name,
                'username' => $req->username,
                'contact_no' => $req->contact_no,
                'password' => '123'
            ]);

            return  'OK';
    }


    public function delete($id){

        DB::table('user')->where('id', $id)->delete();

            return  "DELETED";
    }
}
