package com.Java_Doce.Java.infrastructure.repository;

import com.Java_Doce.Java.infrastructure.entitys.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {

    // Busca um usuário pelo CPF
    Optional<Usuario> findByCpf(String cpf);

    // Deleta um usuário pelo CPF
    @Transactional
    void deleteByCpf(String cpf);
}
