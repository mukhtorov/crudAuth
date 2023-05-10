import React, { useState } from 'react'
import { Btn, Container, ControlController, Controllers, Icon, Images, Search, Wrap } from './style'
import logo from '../../assets/img/review-icon-3.png'
import { useThemeContext } from '../../context/Theme'
import { Outlet, useNavigate } from 'react-router-dom'
import { Modal } from 'antd';
import flag_en from "../../assets/img/flag-en.png";
import flag_ru from "../../assets/img/Flag_of_Uzbekistan.svg.png";
// import 'antd/dist/reset.css';
export const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [{ dark }, dispatch] = useThemeContext()
    const navigate = useNavigate()

    return (
        <>
            <Container>
                <Wrap>
                    <Wrap.Images onClick={() => navigate('/home')}>
                        <Images.Logo1 src={logo} />
                        <h1>Review</h1>
                    </Wrap.Images>

                    <Search>
                        <Search.Input
                            className="search_input"
                            placeholder="Search"
                        />
                        <Search.Btn type="submit">
                            <Icon.Search />
                        </Search.Btn>
                    </Search>
                    <ControlController>
                        <Controllers>

                            <Icon.Dark
                                onClick={() => dispatch({ type: "setMode", payload: !dark })} />
                        </Controllers>
                        <Controllers>

                            <Btn onClick={() => navigate('/home/registration')}>
                                Sign Up/Log In
                            </Btn>
                        </Controllers>

                        <Controllers>

                            <Btn onClick={() => setIsModalOpen(true)}>

                                <Icon.Lang />
                            </Btn>
                            <Modal
                                title="Choose Language"
                                open={isModalOpen}
                                onCancel={() => setIsModalOpen(false)}
                                footer={null}
                                width={360}
                                bodyStyle={{ borderRadius: "18px" }}
                                centered
                            >
                                <Wrap.Language >
                                    <Wrap.LangImage  src={flag_en} /> English
                                </Wrap.Language>
                                <Wrap.Language>
                                    <Wrap.LangImage src={flag_ru} /> Uzbek
                                </Wrap.Language>
                            </Modal>

                        </Controllers>
                        <Controllers>

                            <Icon.Personal />
                        </Controllers>
                    </ControlController>







                </Wrap>
            </Container>
            <Wrap.Container>
                <Wrap.Outlet>
                    <Outlet />
                </Wrap.Outlet>
            </Wrap.Container>

        </>
    )
}
