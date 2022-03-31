import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        customColor: { control: 'color' },
        backgroundColor: { control: 'color'}
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secundary = Template.bind({});
Secundary.args = {
    size: 'normal',
    color: 'secundary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    customColor: '#5517ac',
    size: 'h1',
}

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
    size: 'h1',
    customColor: '#efefef',
    backgroundColor: '#9507a6',
}

export const LabelCustomize = Template.bind({});

LabelCustomize.args = {
    size: 'h2',
    customColor: '#741a1a',
    backgroundColor: '#e9c4ed',
    label: 'Customize label',
    allCaps: false
}

