package com.Java_Doce.Java.infrastructure.repository;

import com.Java_Doce.Java.infrastructure.entitys.Compra;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompraRepository extends MongoRepository<Compra, String> {
    List<Compra> findByUsuarioId(String usuarioId);

    // Você pode adicionar consultas personalizadas, por exemplo:
    // List<Compra> findByUsuarioId(String usuarioId);
}
