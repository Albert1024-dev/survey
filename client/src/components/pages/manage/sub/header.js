import { Box } from '@mui/material'
import React, { useState } from 'react'
import SubTitleName from '../../../normal/subTitleName'
import { Undo } from '@mui/icons-material'
import { useNavigate } from 'react-router';


function Header() {
    const navigate = useNavigate();
    const [view, setView] = useState('table');
    var menuList = [
        { label: 'Survey Result', action: () => { setView('table') } },
        { label: 'Current Question', action: () => { setView('current') } },
        { label: 'Create Question', action: () => { setView('create') } },
    ];

    const onBack = () => {
        navigate('/');
    }

    return (
        <Box sx={{ padding: '0 0', borderBottom: '1px solid #aaa', display: 'flex', justifyContent: 'space-between', flex: 1, backgroundColor: '#f0eeeb', position: 'absolute', top: '0', width: '100%' }}>
            <Box sx={{ margin: 'auto 10px', cursor: 'pointer' }} onClick={onBack}>
                <Undo />
            </Box>
            <Box sx={{ padding: '0 0 0 50px' }}>
                <SubTitleName text="TALK TYPES MANAGE" color="red" variant="h4" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', paddingRight: '30px', cursor: 'pointer' }}>
                {
                    menuList.map((item, index) => {
                        return <span key={`${item.label}_${index}_`} style={{ padding: '0px 20px' }}>
                            <Box onClick={item.action}>
                                {item.label}
                            </Box>
                        </span>
                    })
                }
            </Box>
        </Box>
    )
}

export default Header