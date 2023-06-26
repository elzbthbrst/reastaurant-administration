import '../../style/App.css'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, Select, Space, Button, Input } from 'antd';
import { orderRules } from '../../extra/form-rules/orderRules';

export default function OrderFormSelectDishes({ options }) {
    const { Option } = Select

    return (
        <Form.List
            name="dishes"
        >
            {(fields, { add, remove }) => (
                <>
                    {fields.map((field) => (
                        <Space key={field.key} align="baseline" wrap>
                            <Form.Item
                                noStyle
                                shouldUpdate
                            >
                                {() => (
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'dishId']}
                                        rules={orderRules.dishId}
                                    >
                                        <Select
                                            placeholder='chose dishes'
                                            className='width-200'
                                        >
                                            {(options.dish).map((item) => (
                                                <Option key={item.value} value={item.value}>
                                                    {item.label}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                )}
                            </Form.Item>
                            <Form.Item
                                {...field}
                                name={[field.name, 'count']}
                                rules={orderRules.count}
                                className ='width-200'
                            >
                                <Input placeholder='Input dish count' />
                                
                            </Form.Item>

                            <MinusCircleOutlined onClick={() => remove(field.name)} />
                        </Space>
                    ))}

                    <Form.Item>
                        <Button type="dashed"  onClick={() => add()} block icon={<PlusOutlined />}>
                            Add Dish
                        </Button>
                    </Form.Item>
                </>
            )}
        </Form.List>
    )
}