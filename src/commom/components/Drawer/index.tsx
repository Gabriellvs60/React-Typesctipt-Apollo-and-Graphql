import React, { useState, Component } from 'react'
import { Drawer, Button } from 'antd';

interface Props { 
    title: string,
    formChildren: any,
    visible : any, 
    setVisible: any,
    editData: any,
    setEditData: any,
}

const GenericDrawer = ({ title, formChildren, visible, setVisible, editData, setEditData }: Props) =>{
    return (
        <>
            <Drawer
                title={title}
                width={520}
                closable={false}
                onClose={() => setVisible(false)}
                visible={visible}
            >
                {formChildren}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e8e8e8',
                        padding: '10px 16px',
                        textAlign: 'right',
                        left: 0,
                        background: '#fff',
                        borderRadius: '0 0 4px 4px',
                    }}
                >
                    <Button
                        style={{
                            marginRight: 8,
                        }}
                        onClick={() => { setVisible(false) }}
                    >
                        Cancel
            </Button>
                    <Button onClick={() => { setVisible(false) }} type="primary">
                        Submit
            </Button>
                </div>
            </Drawer>
        </>
    )
}

export default GenericDrawer
