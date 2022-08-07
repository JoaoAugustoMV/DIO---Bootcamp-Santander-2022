package com.dio.padraoprojetos.service.impl;
import com.dio.padraoprojetos.service.ClienteService;
import com.dio.padraoprojetos.service.ViaCepService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.dio.padraoprojetos.model.Cliente;
import com.dio.padraoprojetos.model.ClienteRepository;
import com.dio.padraoprojetos.model.Endereco;
import com.dio.padraoprojetos.model.EnderecoRepository;

public class ClienteServiceImpl implements ClienteService{

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private ViaCepService viaCepService;
    @Override
    public Iterable<Cliente> buscarTodos(){
        
        return clienteRepository.findAll();
    }

    @Override
    public Cliente buscarPorId(Long id){
        Optional<Cliente> cliente = clienteRepository.findById(id);
        return cliente.get();
    }

    @Override
    public void inserir (Cliente cliente){
        salvarClienteComCep(cliente);
    }

    
    @Override
    public void atualizar(Long id, Cliente cliente){
        Optional<Cliente> clienteBd = clienteRepository.findById(id);
        if(clienteBd.isPresent()){
            salvarClienteComCep(cliente);
        }
    }
    
    @Override
    public void deletar(Long id) {
        // TODO Auto-generated method stub
        clienteRepository.deleteById(id);
        
    }
    private void salvarClienteComCep(Cliente cliente) {
        String cep = cliente.getEndereco().getCep();
        Endereco endereco = enderecoRepository.findById(cep).orElseGet(() -> {
            Endereco novoEndereco = viaCepService.consultarCep(cep);
            enderecoRepository.save(novoEndereco);
            return novoEndereco;
        });
        cliente.setEndereco(endereco);
        clienteRepository.save(cliente);
    }
}
