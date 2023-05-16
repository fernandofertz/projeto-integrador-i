import React, {useState} from "react";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const TableComponent = () => {

    const [searchText, setSearchText] = useState("");
    const [searchColumn, setSearchColumn] = useState("");

    const data = [{
        key: "1",
        funcionario: "João",
        num_sequencial: 1,
        setorRegistro: "RH",
        setorIncidente: 'Produção',
        data: "2022-04-15",
        observacoes: "Observação 1",
    },
    {
        key: "2",
        funcionario: "Maria",
        num_sequencial: 2,
        setorRegistro: "TI",
        setorIncidente: 'Almoxarifado',
        data: "2022-05-01",
        observacoes: "Observação 2",
    },
    {
        key: "3",
        funcionario: "Pedro",
        num_sequencial: 3,
        setorRegistro: "Vendas",
        setorIncidente: "Pintura",
        data: "2022-05-03",
        observacoes: "Observação 3",
    }]

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
            <Input
            placeholder={`Buscar por ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: "block" }}
            />
            <Space>
            <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
            >
                Buscar
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Limpar
            </Button>
            </Space>
        </div>
        ),
        filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
        ),
        onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
            setTimeout(() => searchInput.current.select(), 100);
        }
        },
        render: (text) =>
        searchColumn === dataIndex ? (
            <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text.toString()}
            />
        ) : (
            text
        ),
    })

    const columns = [  {    title: "Funcionário",    dataIndex: "funcionario",    key: "funcionario",    ...getColumnSearchProps("funcionario"), // adiciona getColumnSearchProps a esta coluna    sorter: (a, b) => a.funcionario.localeCompare(b.funcionario),    sortDirections: ["descend", "ascend"],
        filters: [
        { text: "João", value: "João" },
        { text: "Maria", value: "Maria" },
        { text: "Pedro", value: "Pedro" },
        ],
        onFilter: (value, record) => record.funcionario.indexOf(value) === 0,
        width: 220
    },
    {
        title: "Num Sequencial",
        dataIndex: "num_sequencial",
        key: "num_sequencial",
        ...getColumnSearchProps("num_sequencial"), // adiciona getColumnSearchProps a esta coluna
        sorter: (a, b) => a.num_sequencial - b.num_sequencial,
        sortDirections: ["descend", "ascend"],
        width: 220
    },
    {
        title: "Setor Registro",
        dataIndex: "setorRegistro",
        key: "setorRegistro",
        ...getColumnSearchProps("setorRegistro"), // adiciona getColumnSearchProps a esta coluna
        sorter: (a, b) => a.setor.localeCompare(b.setor),
        sortDirections: ["descend", "ascend"],
        filters: [
        { text: "RH", value: "RH" },
        { text: "TI", value: "TI" },
        { text: "Vendas", value: "Vendas" },
        ],
        onFilter: (value, record) => record.setor.indexOf(value) === 0,
        width: 220  
    },
    {
        title: "Setor Incidente",
        dataIndex: "setorIncidente",
        key: "setorIncidente",
        ...getColumnSearchProps("setorIncidente"), // adiciona getColumnSearchProps a esta coluna
        sorter: (a, b) => a.setor.localeCompare(b.setor),
        sortDirections: ["descend", "ascend"],
        filters: [
        { text: "RH", value: "RH" },
        { text: "TI", value: "TI" },
        { text: "Vendas", value: "Vendas" },
        ],
        onFilter: (value, record) => record.setor.indexOf(value) === 0,
        width: 220  
    },
    {
        title: "Data",
        dataIndex: "data",
        key: "data",
        ...getColumnSearchProps("data"), // adiciona getColumnSearchProps a esta coluna
        sorter: (a, b) => new Date(a.data) - new Date(b.data),
        sortDirections: ["descend", "ascend"],
        width: 220
    },
    {
        title: "Observações",
        dataIndex: "observacoes",
        key: "observacoes",
        ...getColumnSearchProps("observacoes"), // adiciona getColumnSearchProps a esta coluna
        width: 220
    },
    {
        title: 'Ações',
        key: 'ações',
        width: 200,
        render: (_, record) => (
          <Space size="large">
            <a>Editar</a>
            <a>Deletar</a>
          </Space>
        ),
      },
    ];

  return (
    <div>
      <Table dataSource={data} columns={columns} style={{width:'100%', marginTop:'-165px'}}/>
    </div>
  )
}

export default TableComponent;