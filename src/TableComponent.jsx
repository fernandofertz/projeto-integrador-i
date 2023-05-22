import React, { useState, useEffect } from "react";
import { useNavigate, BrowserRouter, Route} from 'react-router-dom';
import { Table, Input, Button, Space, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import EditNcComponent from "./NC/EditNcComponent";

const TableComponent = () => {
    const [searchColumn, setSearchColumn] = useState();
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData(pageNumber, pageSize);
    }, [pageNumber, pageSize]);

    const fetchData = async (pageNumber, pageSize) => {
        const offset = (pageNumber - 1) * pageSize;
        try {
            const response = await axios.get(
                `http://localhost:8080/api/v1/nc/getAll?offset=${offset}&pageNumber=${pageNumber}&pageSize=${pageSize}`
            );
            setData(response.data.content);
            setTotalItems(response.data.totalItems);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (record) => {
        setSelectedItem(record);
        console.log(selectedItem)
        setEditModalVisible(true);
    };

  
    const handlePageChange = (page, pageSize) => {
      setPageNumber(page);
      setPageSize(pageSize);
    };


    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };

    useEffect(() => {
        if (selectedItem) {
          navigate(`/nc/editar`, { state: selectedItem });
        }
      }, [navigate, selectedItem]);

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

    const columns = [  {    title: "Funcionário",    dataIndex: "id_colaborador",    key: "id_colaborador",    ...getColumnSearchProps("funcionario"), // adiciona getColumnSearchProps a esta coluna    sorter: (a, b) => a.funcionario.localeCompare(b.funcionario),    sortDirections: ["descend", "ascend"],
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
        dataIndex: "setor",
        key: "setor",
        ...getColumnSearchProps("setor"), // adiciona getColumnSearchProps a esta coluna
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
        dataIndex: "tipo_nc",
        key: "tipo_nc",
        ...getColumnSearchProps("tipo_nc"), // adiciona getColumnSearchProps a esta coluna
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
        dataIndex: "dt_abertura",
        key: "dt_abertura",
        ...getColumnSearchProps("dt_abertura"), // adiciona getColumnSearchProps a esta coluna
        sorter: (a, b) => new Date(a.data) - new Date(b.data),
        sortDirections: ["descend", "ascend"],
        width: 220
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        ...getColumnSearchProps("observacoes"), // adiciona getColumnSearchProps a esta coluna
        width: 220
    },
    {
        title: 'Ações',
        key: 'ações',
        width: 200,
        render: (_, record) => (
          <Space size="large">
            <a onClick={() => handleEdit(record)}>Editar</a>
            <a>Deletar</a>
          </Space>
        ),
      },
    ];

  return (
    <div>
          <Table dataSource={data} columns={columns} rowKey="id" style={{width:'100%', marginTop:'-250px'}}/>
          
          <Pagination
            current={pageNumber}
            pageSize={pageSize}
            total={totalItems}
            onChange={handlePageChange}
          />
          {editModalVisible && 
            <EditNcComponent
                initialData={selectedItem}
            />
        }
    </div>
  )
}

export default TableComponent;