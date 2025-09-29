package com.Java_Doce.Java.infrastructure.repository;

import com.Java_Doce.Java.infrastructure.entitys.Usuario;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByCpf(String cpf);

    @Transactional
    Void deleteByCpf (String cpf);
}
