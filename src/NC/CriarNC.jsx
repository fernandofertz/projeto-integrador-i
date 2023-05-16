import { Select, Form, Input, Button} from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';

const CriarNC = () => {
    const { Option } = Select;
    const [formData, setFormData] = useState({});
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
    const handleSelectChange = (name, value) => {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
    const handleDateChange = (name, value) => {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
    const onFinish = () => {
        console.log(formData);
      };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  
  return (
    <div>
      <Form onFinish={onFinish} style={{ width:'150%', marginLeft: '60px', marginTop: '150px'}}>
      <h1 style={{fontSize:'30px', textAlign:'center'}}>Cadastro de Não Conformidades</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', width:'95%', marginTop:'50px'}}>
        <Form.Item label="Setor que fez o registro" name="setorRegistro" style={{ width:'30%'}}>
          <Select onChange={(value) => handleSelectChange('setorRegistro', value)}>
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
        <Form.Item label="Setor de origem" name="setorOrigem" style={{width: '30%'}}>
          <Select onChange={(value) => handleSelectChange('setorOrigem', value)}>
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
        <Form.Item label="Data de Abertura" name="dataAbertura" style={{width: '30%'}}>
          <Input type="date" onChange={(event) => handleDateChange('dataAbertura', event.target.value)}/>
        </Form.Item>
        </div>
        <div style={{ display: 'flex' ,justifyContent: 'space-between', width:'95%'}}>
        <Form.Item label="Num Sequencial" name="numSequencial" style={{width:'30%'}}>
          <Input onChange={(event) => handleInputChange(event)} />
        </Form.Item>
        <Form.Item label="Num Guia" name="numGuia" style={{width:'30%'}}>
          <Input onChange={(event) => handleInputChange(event)}/>
        </Form.Item>
        <Form.Item label="Nome Funcionário" name="nomeFuncionario" style={{width:'30%'}}>
          <Input onChange={(event) => handleInputChange(event)}/>
        </Form.Item>
        </div>
        <div style={{ display: 'flex' ,justifyContent: 'space-between', width:'95%'}}>
        <Form.Item label="Tipo de Notificação" name="tipoNotificacao" style={{width:'38%'}}>
          <Select onChange={(value) => handleSelectChange('tipoNotificacao', value)}>
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
        <Select onChange={(value) => handleSelectChange('classificacao', value)}>
          <Option value="Não conformidade">Não conformidade</Option>
          <Option value="Incidente/Evento Adverso">Incidente/Evento Adverso</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Responsabilidade" name="responsabilidade" style={{width:'26%'}}>
        <Select onChange={(value) => handleSelectChange('responsabilidade', value)}>
          <Option value="Intra-laboratorial">Intra-laboratorial</Option>
          <Option value="Extra-laboratorial">Extra-laboratorial</Option>
        </Select>
      </Form.Item>
      </div>
      <div style={{ display: 'flex' ,justifyContent: 'space-between', width:'95%'}}>
      <Form.Item label="Classificação do incidente" name="classificacaoIncidente" style={{width:'30%'}}>
        <Select onChange={(value) => handleSelectChange('classificacaoIncidente', value)}>
          <Option value="CIRCUNTÂNCIA DE RISCO">Circustância de risco</Option>
          <Option value="Near Miss">Near Miss</Option>
          <Option value="Evento">Evento</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Classificação do Evento" name="classificacaoDoEvento" style={{width:'30%'}}>
        <Select onChange={(value) => handleSelectChange('classificacaoDoEvento', value)}>
          <Option value="Evento sem dano">Evento sem dano</Option>
          <Option value="Evento Adverso">Evento adverso</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Fase em que ocorreu" name="faseOcorreu" style={{width:'30%'}}>
        <Select onChange={(value) => handleSelectChange('faseOcorreu', value)}>
          <Option value="Fase pré-analítica">Fase pré-analítica</Option>
          <Option value="Fase analítica">Fase analítica</Option>
          <Option value="Fase pós-analítica">Fase pós-analítica</Option>
          <Option value="Processos Gerenciais">Processos Gerenciais</Option>
          <Option value="Processos de Apoio">Processos de Apoio</Option>
        </Select>
      </Form.Item>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width:'95%'}}>
      <Form.Item label="A falha é recorrente?" name="recorrencia" style={{width:'45%'}}>
        <Select onChange={(value) => handleSelectChange('recorrencia', value)}>
          <Option value="Sim">Sim</Option>
          <Option value="Não">Não</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Classificação do evento adverso" name="classificacaoEventoAdverso" style={{width:'45%'}}>
        <Select onChange={(value) => handleSelectChange('classificacaoEventoAdverso', value)}>
          <Option value="Dano leve">Dano leve</Option>
          <Option value="Dano moderado">Dano moderado</Option>
          <Option value="Dano grave">Dano grave</Option>
          <Option value="Dano Catastrófico">Dano Catastrófico</Option>
          <Option value="">Não tem evento adverso</Option>
        </Select>
      </Form.Item>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width:'95%'}}>
      <Form.Item label="Causa Raiz" name="causaRaiz" style={{width:'45%'}}>
        <Input.TextArea onChange={(event) => handleInputChange(event)}/>
      </Form.Item>
      <Form.Item label="Descrição" name="descricao" style={{width:'45%'}}>
        <Input.TextArea onChange={(event) => handleInputChange(event)}/>
      </Form.Item>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width:'95%' }}>
      <Form.Item label="Ação de correção" name="acaoCorrecao" style={{width:'45%'}}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Ações de melhoria" name="acaoMelhoria" style={{width:'45%'}}> 
        <Input.TextArea />
      </Form.Item>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width:'95%'}}>
      <Form.Item label="Data de Fechamento" name="dataFechamento" style={{width:'45%'}}>
          <Input type="date" onChange={(event) => handleDateChange('dataFechamento', event.target.value)}/>
        </Form.Item>
        <Form.Item label="Conclusão da notificação" name="conclusao" style={{width:'45%'}}>
        <Select>
          <Option value="Encerrada">Encerrada</Option>
          <Option value="Pendente">Pendente</Option>
          <Option value="Necessita de plano de ação">Necessita de plano de ação</Option>
        </Select>
      </Form.Item>
      </div>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Enviar
        </Button>
        </Form.Item>
      </Form>
      </div>
  )
}

export default CriarNC;
