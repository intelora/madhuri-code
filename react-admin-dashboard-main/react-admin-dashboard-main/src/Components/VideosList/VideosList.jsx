/* eslint-disable no-constant-condition */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../../../Components/Navbar/Navbar';
// import Sidebar from '../../../Components/Sidebar/Sidebar';
// import blog1 from '../../Images/blog1.jpg';
// import blog2 from '../../Images/blog2.jpg';
// import blog3 from '../../Images/blog3.jpg';
// import blog4 from '../../Images/blog4.jpg';
// import blog5 from '../../Images/book3.jpg';
// import blog6 from '../../Images/book5.jpg';
import './videoslist.scss';

const userData = [
    // {
    //     id: '630343eb94c2812e4cd7e45d',
    //     title: 'Want to know how to manage multiple projects at once.',
    //     author: 'devidbom23',
    //     image: blog1,
    //     createdAt: new Date(Date.now()).toLocaleString(),
    // },
    {
        id: '6303234eb94c1',
        titlelink: 'How to Choose a right product?',
        description: 'john03',
        size: "3mb",
        individualfree:'234',
        views:'3k',
        likes:'56',
        promo:'link'
    },
    {
        id: '6303234eb94c2',
        titlelink: 'How to Choose a right product?',
        description: 'john03',
        size: "3mb",
        individualfree:'234',
        views:'3k',
        likes:'56',
        promo:'link'
    },

    {
        id: '6303234eb94c3',
        titlelink: 'How to Choose a right product?',
        description: 'john03',
        size: "3mb",
        individualfree:'234',
        views:'3k',
        likes:'56',
        promo:'link'
    },
    
    
];

function VideosList({ type }) {
    const [data, setData] = useState(userData);

    const handleDlt = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 310,
            // renderCell: (param) => (
            //     <div className="userr">
            //         <img src={param.row.image} alt="User Image" className="userr_image" />
            //         {param.row.id}
            //     </div>
            // ),
        },
        {
            field: 'titlelink',
            headerName: 'TitleLink',
            width: 300,
            style: { color: 'red' },
        },
        { field: 'description', headerName: 'Description', width: 170 },
        { field: 'size', headerName: 'Size', width: 200 },
        { field: 'individualfree', headerName: 'IndividualFree', width: 100 },
        { field: 'views', headerName: 'Views', width: 100 },
        { field: 'likes', headerName: 'Likes', width: 100 },
        { field: 'promo', headerName: 'Promo', width: 100 },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => (
                <div className="actionn">
                    <Link to={params.row.id}>
                        <button type="button" className="view_btn">
                            Edit
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="delete_btn"
                        onClick={() => handleDlt(params.row.id)}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="blog_page">
            {/* <Sidebar /> */}
            <h1>VideosList</h1>

            <div className="blog_page_main">
               {/* <Navbar /> */}

                <div className="blog_page_table">
                
                    <DataGrid
                        className="data_grid"
                        rows={data}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}

export default VideosList;