import React, { useState, useEffect } from 'react';
import { Select, Form, Input, Button} from 'antd';
import axios from 'axios';

const EditNcComponent = ( initialData ) => {
  const [formData, setFormData] = useState({});
  const { Option } = Select;


  useEffect(() => {
    setFormData(initialData);
    console.log(formData)
  }, [initialData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
      const json = JSON.stringify(formData);

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      id = formData.id;

      axios.post('http://localhost:8080/api/v1/nc/update/{id}', id, json, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return (
        <div>
          <Form onFinish={handleSubmit} style={{ width:'150%', marginLeft: '60px', marginTop: '150px'}}>
          <h1 style={{fontSize:'30px', textAlign:'center'}}>Cadastro de Não Conformidades</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', width:'95%', marginTop:'50px'}}>
            <Form.Item label="Setor que fez o registro" name="setor" style={{ width:'30%'}}>
              <Select value = {formData.setor} onChange={(value) => handleSelectChange("setor", value)}>
                <Option value="Triagem">Triagem</Option>
                <Option value="Setor Acadêmico">Setor Acadêmico</Option>
                <Option value="Microbiologia">Microbiologia</Option>
                <Option value="Suprimentos">Suprimentos</Option>
                <Option value="Assessoria">Assessoria</Option>
                <Option value="Comercial">Comercial</Option>
                <Option value="Compras">Compras</Option>
                <Option value="Logística">Logística</Option>
                <Option value="Financeiro">Financeiro</Option>
                <Option value="Recursos Humanos">Recursos Humanos</Option>
                <Option value="Diretoria">Diretoria</Option>
                <Option value="Qualidade">Qualidade</Option>
                <Option value="Limpeza">Limpeza</Option>
                <Option value="Outro">Outro</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Setor de origem" name="tipo_nc" style={{width: '30%'}}>
              <Select value = {formData.tipo_nc} onChange={(value) => handleSelectChange("tipo_nc", value)}>
                <Option value="Triagem">Triagem</Option>
                <Option value="Setor Técnico">Setor Técnico</Option>
                <Option value="Microbiologia">Microbiologia</Option>
                <Option value="Suprimentos">Suprimentos</Option>
                <Option value="Assessoria">Assessoria</Option>
                <Option value="Comercial">Comercial</Option>
                <Option value="Compras">Compras</Option>
                <Option value="Logística">Logística</Option>
                <Option value="Financeiro">Financeiro</Option>
                <Option value="Recursos Humanos">Recursos Humanos</Option>
                <Option value="Diretoria">Diretoria</Option>
                <Option value="Qualidade">Qualidade</Option>
                <Option value="Limpeza">Limpeza</Option>
                <Option value="Outro">Outro</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Data de Abertura" name="dt_abertura" style={{width: '30%'}}>
              <Input type="date" onChange={(event) => handleChange("dt_abertura", event.target.value)}/>
            </Form.Item>
            </div>
            <div style={{ display: 'flex' ,justifyContent: 'space-between', width:'95%'}}>
            <Form.Item label="Num Sequencial" name="num_sequencial" style={{width:'30%'}}>
              <Input value = {formData.num_sequencial} onChange={(event) => handleChange("num_sequencial", event.target.value)} />
            </Form.Item>
            <Form.Item label="Num Guia" name="num_guia" style={{width:'30%'}}>
              <Input value = {formData.num_guia} onChange={(event) => handleChange("num_guia", event.target.value)}/>
            </Form.Item>
            <Form.Item label="Nome Funcionário" name="id_colaborador" style={{width:'30%'}}>
              <Input value = {formData.id_colaborador} onChange={(event) => handleChange("id_colaborador", event.target.value)}/>
            </Form.Item>
            </div>
            <div style={{ display: 'flex' ,justifyContent: 'space-between', width:'95%'}}>
            <Form.Item label="Tipo de Notificação" name="id_tipo" style={{width:'38%'}}>
              <Select value = {formData.id_tipo} onChange={(value) => handleSelectChange("id_tipo", value)}>
                <Option value="Processos/Procedimentos Técnicos">Processos/Procedimentos Técnicos</Option>
                <Option value="Documentação">Documentação</Option>
                <Option value="Infecções associadas aos Cuidados de Saúde">Infecções associadas aos Cuidados de Saúde</Option>
                <Option value="Equipamentos Técnicos">Equipamentos Técnicos</Option>
                <Option value="Acidente com profissional da saúde">Acidente com profissional da saúde</Option>
                <Option value="Infraestrutura/ Instalação">Infraestrutura/ Instalação</Option>
                <Option value="Recursos/ Gestão Organizacional">Recursos/ Gestão Organizacional</Option>
                <Option value="Cliente">Cliente</Option>
                <Option value="Fornecedor ">Fornecedor </Option>
                <Option value="Retificação de Laudo">Retificação de Laudo</Option>
                <Option value="TI ">TI </Option>
                <Option value="Insumos, reagentes">Insumos, reagentes</Option>
                <Option value="Questionamento de cliente">Questionamento de cliente</Option>
                <Option value="Tecnovigilância">Tecnovigilância</Option>
                <Option value="Biossegurança">Biossegurança</Option>
                <Option value="Outro">Outro</Option>
            </Select>
            </Form.Item>
          <Form.Item label="Classificação" name="classificacao" style={{width:'26%'}}>
            <Select value = {formData.classificacao} onChange={(value) => handleSelectChange("classificacao", value)}>
              <Option value="Não conformidade">Não conformidade</Option>
              <Option value="Incidente/Evento Adverso">Incidente/Evento Adverso</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Responsabilidade" name="responsabilidade" style={{width:'26%'}}>
            <Select value = {formData.responsabilidade} onChange={(value) => handleSelectChange("responsabilidade", value)}>
              <Option value="Intra-laboratorial">Intra-laboratorial</Option>
              <Option value="Extra-laboratorial">Extra-laboratorial</Option>
            </Select>
          </Form.Item>
          </div>
          <div style={{ display: 'flex' ,justifyContent: 'space-between', width:'95%'}}>
          <Form.Item label="Classificação do incidente" name="incidente" style={{width:'30%'}}>
            <Select value = {formData.incidente} onChange={(value) => handleSelectChange("incidente", value)}>
              <Option value="CIRCUNTÂNCIA DE RISCO">Circustância de risco</Option>
              <Option value="Near Miss">Near Miss</Option>
              <Option value="Evento">Evento</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Classificação do Evento" name="evento" style={{width:'30%'}}>
            <Select value = {formData.evento} onChange={(value) => handleSelectChange("evento", value)}>
              <Option value="Evento sem dano">Evento sem dano</Option>
              <Option value="Evento Adverso">Evento adverso</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Fase em que ocorreu" name="fase" style={{width:'30%'}}>
            <Select value = {formData.fase} onChange={(value) => handleSelectChange("fase", value)}>
              <Option value="Fase pré-analítica">Fase pré-analítica</Option>
              <Option value="Fase analítica">Fase analítica</Option>
              <Option value="Fase pós-analítica">Fase pós-analítica</Option>
              <Option value="Processos Gerenciais">Processos Gerenciais</Option>
              <Option value="Processos de Apoio">Processos de Apoio</Option>
            </Select>
          </Form.Item>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width:'95%'}}>
          <Form.Item label="A falha é recorrente?" name="recorrencia" style={{ width: '45%' }}>
            <Select
              value={formData.recorrencia}
              onChange={(value) => handleSelectChange('recorrencia', value)}
            >
              <Option value="Sim">Sim</Option>
              <Option value="Não">Não</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Classificação do evento adverso" name="dano" style={{width:'45%'}}>
            <Select value = {formData.dano} onChange={(value) => handleSelectChange("dano", value)}>
              <Option value="Dano leve">Dano leve</Option>
              <Option value="Dano moderado">Dano moderado</Option>
              <Option value="Dano grave">Dano grave</Option>
              <Option value="Dano Catastrófico">Dano Catastrófico</Option>
              <Option value="">Não tem evento adverso</Option>
            </Select>
          </Form.Item>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width:'95%'}}>
          <Form.Item label="Causa Raiz" name="causa_raiz" style={{width:'45%'}}>
            <Input.TextArea value = {formData.causa_raiz} onChange={(event) => handleChange("causa_raiz", event.target.value)}/>
          </Form.Item>
          <Form.Item label="Descrição" name="descricao" style={{width:'45%'}}>
            <Input.TextArea value = {formData.descricao} onChange={(event) => handleChange("descricao", event.target.value)}/>
          </Form.Item>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width:'95%' }}>
          <Form.Item label="Ação de correção" name="correcao"  style={{width:'45%'}}>
            <Input.TextArea value = {formData.correcao} onChange={(event) => handleChange("correcao", event.target.value)}/>
          </Form.Item>
          <Form.Item label="Ações de melhoria" name="melhoria"  style={{width:'45%'}}> 
            <Input.TextArea value = {formData.melhoria} onChange={(event) => handleChange("melhoria", event.target.value)}/>
          </Form.Item>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width:'95%'}}>
          <Form.Item label="Data de Fechamento" name="dt_fechamento" style={{width:'45%'}}>
              <Input type="date" value = {formData.dt_fechamento} onChange={(event) => handleChange("dt_fechamento", event.target.value)}/>
            </Form.Item>
            <Form.Item label="Conclusão da notificação" name="status" style={{width:'45%'}}>
            <Select value = {formData.status} onChange={(value) => handleSelectChange("status", value)}>
              <Option value="Encerrada">Encerrada</Option>
              <Option value="Pendente">Pendente</Option>
              <Option value="Necessita de plano de ação">Necessita de plano de ação</Option>
            </Select>
          </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit">
                Enviar
            </Button>
            </Form.Item>
          </Form>
          </div>
      )
};

export default EditNcComponent;