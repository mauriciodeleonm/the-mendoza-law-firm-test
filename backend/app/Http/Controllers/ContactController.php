<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    // Método para almacenar un nuevo contacto
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        $contact = Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ]);

        return response()->json(['message' => 'Mensaje enviado con éxito', 'data' => $contact], 201);
    }

    // Método para obtener todos los contactos (opcional)
    public function index()
    {
        return response()->json(Contact::all());
    }
}
