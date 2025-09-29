package com.Java_Doce.Java.exceptions;

public class ResourceNotFoundException extends RuntimeException{

    public ResourceNotFoundException(String message){
        super(message);
    }
    public  ResourceNotFoundException(Long id){
        super("Recurso nao encontrado com o ID:" +id);
    }

}
