package com.Java_Doce.Java.infrastructure.repository;

import com.Java_Doce.Java.infrastructure.entitys.Padaria;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PadariaRepository extends MongoRepository<Padaria, String> {
    Optional<Padaria> findByNome(String nome);

    // Você pode adicionar consultas personalizadas aqui se precisar
}
