package com.Java_Doce.Java.controller;

import com.Java_Doce.Java.business.PadariaService;
import com.Java_Doce.Java.infrastructure.entitys.Padaria;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = "*")
@RestController
@RequestMapping("/padaria")
public class PadariaController {

    private final PadariaService padariaService;

    // 🔹 Construtor manual para injeção de dependência
    public PadariaController(PadariaService padariaService) {
        this.padariaService = padariaService;
    }

    @PostMapping
    public ResponseEntity<Void> salvarPadaria(@RequestBody Padaria padaria){
        padariaService.salvarPadaria(padaria);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Padaria> buscarPorId(@PathVariable Long id){
        Padaria padaria = padariaService.buscarPorId(id);
        return ResponseEntity.ok(padaria);
    }

    @GetMapping
    public ResponseEntity<List<Padaria>> listarTodos(){
        return ResponseEntity.ok(padariaService.listarTodos());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> atualizarPadaria(@PathVariable Long id, @RequestBody Padaria padaria){
        padariaService.atualizarPadaria(id, padaria);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePorId(@PathVariable Long id){
        padariaService.deletarPorId(id);
        return ResponseEntity.noContent().build();
    }
}
