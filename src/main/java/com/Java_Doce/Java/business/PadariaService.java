package com.Java_Doce.Java.business;

import com.Java_Doce.Java.infrastructure.entitys.Padaria;
import com.Java_Doce.Java.infrastructure.repository.PadariaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PadariaService {

    private final PadariaRepository padariaRepository;

    // Construtor manual para injeção de dependência
    public PadariaService(PadariaRepository padariaRepository) {
        this.padariaRepository = padariaRepository;
    }

    public void salvarPadaria(Padaria padaria){
        padariaRepository.save(padaria);
    }

    public Padaria buscarPorId(Long id){
        return padariaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item não encontrado com ID: " + id));
    }

    public List<Padaria> listarTodos(){
        return padariaRepository.findAll();
    }

    public void atualizarPadaria(Long id, Padaria novaPadaria){
        Padaria existente = padariaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item de padaria não encontrado com ID: " + id));

        existente.setNome(novaPadaria.getNome());
        existente.setPreco(novaPadaria.getPreco());
        existente.setQuantidade(novaPadaria.getQuantidade());

        padariaRepository.save(existente);
    }

    public void deletarPorId(Long id){
        padariaRepository.deleteById(id);
    }
}
