package com.Java_Doce.Java.controller;

import com.Java_Doce.Java.business.CompraService;
import com.Java_Doce.Java.dto.CompraRequestDTO;
import com.Java_Doce.Java.infrastructure.entitys.Compra;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/compras")
@RequiredArgsConstructor
public class CompraController {
private final CompraService compraService;
@PostMapping
    public ResponseEntity<Compra> criarCompra(@RequestBody CompraRequestDTO dto){
    Compra novaCompra = compraService.criarCompraComDTO(dto);
    return ResponseEntity.ok(novaCompra);
}
}

