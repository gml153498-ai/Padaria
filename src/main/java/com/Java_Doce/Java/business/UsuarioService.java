package com.Java_Doce.Java.business;

import com.Java_Doce.Java.infrastructure.entitys.Usuario;
import com.Java_Doce.Java.infrastructure.repository.UsuarioRepository;
import jakarta.persistence.Id;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {

        this.repository = repository;
    }

    public void SalvarUsuario(Usuario usuario) {
        repository.saveAndFlush(usuario);
    }
    public Usuario buscarUsuarioPorCpf(String cpf) {
        return repository.findByCpf(cpf)
                .orElseThrow(() -> new RuntimeException("CPF nao encontrado"));

    }
    public void deletarUsuarioPorCpf(String cpf) {
        repository.deleteByCpf(cpf);
    }


    public void atualizarUsuarioPorCpf(String cpf,  Usuario usuario) {

        Usuario usuarioEntity = repository.findByCpf(cpf)
                .orElseThrow(() -> new RuntimeException("Usuario nao encontrado"));



        if(usuario.getNome() !=null) {
            usuarioEntity.setNome(usuario.getNome());
        }
        if(usuario.getEmail() !=null) {
            usuarioEntity.setEmail(usuario.getEmail());
        }
        if(usuario.getTelefone() !=null) {
            usuarioEntity.setTelefone(usuario.getTelefone());
        }
        if(usuario.getDatanascimento() !=null) {
            usuarioEntity.setDatanascimento(usuario.getDatanascimento());
        }
        repository.save(usuarioEntity);
    }
    public List<Usuario> listarTodos() { return repository.findAll();
    }
}
