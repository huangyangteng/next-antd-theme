import React from 'react'
import { Button, Card, Timeline } from 'antd'
import ThemeSwitch from './ThemeSwitch'

const Home = () => (
    <div className="App">
        <h2>
            theme:
            <ThemeSwitch />
        </h2>
        <Button type="primary">Button</Button>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <Timeline
            items={[
                {
                    children: 'Create a services site 2015-09-01'
                },
                {
                    children: 'Solve initial network problems 2015-09-01'
                },
                {
                    children: 'Technical testing 2015-09-01'
                },
                {
                    children: 'Network problems being solved 2015-09-01'
                }
            ]}
        />
    </div>
)

export default Home
