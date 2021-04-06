import React from 'react';
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby';
import { kebabCase } from 'lodash'
import './navbar.css';
import logo from '../img/logo.png';
import { BsArrowRight, BsChevronUp } from 'react-icons/bs';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: '',
			mainMenuActiveIndex: -1,
			activeMenu: 0,
			subMenuActive: false,
			navBarSubMenuActiveClass: '',
			defaultMenuActive: false,
			defaultMenuActiveClass: '',
			subMenuActive: false,
			subMenuActiveClass: ''
		};
	}

	toggleHamburger = () => {
		this.setState(
			{
				active: !this.state.active
			},
			() => {
				this.state.active
					? this.setState({
						navBarActiveClass: 'is-active'
					})
					: this.setState({
						navBarActiveClass: ''
					});
			}
		);
	};

	defaultMenu = () => {
		this.setState(
			{
				defaultMenuActive: !this.state.defaultMenuActive
			},
			() => {
				this.state.defaultMenuActive
					? this.setState({
						defaultMenuActiveClass: 'active'
					})
					: this.setState({
						defaultMenuActiveClass: ''
					});
			}
		);
	};

	toggleSubMenu = () => {
		this.setState(
			{
				subMenuActive: !this.state.subMenuActive
			},
			() => {
				this.state.subMenuActive
					? this.setState({
						subMenuActiveClass: 'active'
					})
					: this.setState({
						subMenuActiveClass: ''
					});
			}
		);
	};

	onMouseOver = (index) => {
		this.setState({
			activeMenu: index
		});
	};

	setMainMenuActive = (index) => {
		this.setState({
			mainMenuActiveIndex: index
		});
	};

	renderCategories = (mainCategory, posts) => {
		const retData = [];
		const dataStr = {};
		if (posts && posts.length > 0) {
			const length = posts.length;
			for (let i = 0; i < length; i++) {
				const post = posts[i].node;
				const categories = post.frontmatter.category;
				if (categories && categories.length > 0 && categories[0] === mainCategory) {
					let subCategory = categories[1];
					dataStr[subCategory] = dataStr[subCategory] || [];
					dataStr[subCategory].push({
						slug: post.fields.slug,
						title: post.frontmatter.title
					});
				}
			}
			const keys = Object.keys(dataStr);
			for (let i = 0; i < keys.length; i++) {
				const subCategory = keys[i];
				const pages = dataStr[keys[i]];
				const sideJSX = <>
					<Link to={`/category/${kebabCase(subCategory)}`} className="navbar-link">
						{subCategory}
						<BsArrowRight className='sub-icon' />
					</Link>
					<span className={`toggle ${this.state.subMenuActiveClass}`}></span>
				</>;
				const rightSideJSX = [];
				for (let j = 0; j < pages.length; j++) {
					const page = pages[j];
					rightSideJSX.push(
						<li key={page.slug}>
							<Link to={page.slug} className="navbar-link">
								{page.title}
							</Link>
						</li>
					);
				}
				retData.push(
					<li key={subCategory} onMouseOver={() => this.onMouseOver(i)}
						className={`${this.state.activeMenu === i ? 'active' : ''}`}>
						{sideJSX}
						<ul className={`sub-menu ${this.state.subMenuActiveClass}`}>
							{rightSideJSX}
						</ul>
					</li>
				);
			}
		}
		return retData;
	};

	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;
		const { mainMenuActiveIndex } = this.state;
		return (
			<nav className='navbar' role='navigation' aria-label='main-navigation'>
				 <div className='container-fluid px-6'>
					<div className='navbar-brand'>
						<Link to='/' className='logo' title='Logo'>
							<img src={logo} alt='Kaldi' style={{ width: '88px' }} />
						</Link>
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target='navMob'
							onClick={() => this.toggleHamburger()}>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
						<div className="navbar-start">
							<ul className="navbar-nav">
<li className={`navbar-item dropdown ${mainMenuActiveIndex === 1 ? 'active' : ''}`}
									onMouseOver={() => this.setMainMenuActive(1)} onMouseOut={() => this.setMainMenuActive(-1)}>
									<Link className="navbar-link">Product & Solutions</Link>
									<span
										onClick={() => this.defaultMenu()}
										className={`toggle ${this.state.defaultMenuActiveClass}`}
									>
									</span>
									<div className={`main-sub-menu ${this.state.defaultMenuActiveClass}`}>
										<ul className="default-active">
											{this.renderCategories("product", posts)}
										</ul>
										<button className="btn btn-close" onClick={() => this.setMainMenuActive(-1)}>
											<BsChevronUp className='sub-icon' />
										</button>
									</div>
								</li>
								<li className={`navbar-item dropdown ${mainMenuActiveIndex === 0 ? 'active' : ''}`}
									onMouseOver={() => this.setMainMenuActive(0)} onMouseOut={() => this.setMainMenuActive(-1)}>
									<Link className="navbar-link">Services & Consulting</Link>
									<span
										onClick={() => this.defaultMenu()}
										className={`toggle ${this.state.defaultMenuActiveClass}`}
									>
									</span>
									<div className={`main-sub-menu ${this.state.defaultMenuActiveClass}`}>
										<ul className="default-active">
											{this.renderCategories("service", posts)}
										</ul>
										<button className="btn btn-close" onClick={() => this.setMainMenuActive(-1)}>
											<BsChevronUp className='sub-icon' />
										</button>
									</div>
								</li>
								
								<li className="navbar-item">
									<Link to="/workflowpost" className="navbar-link">Workflow</Link>
								</li>
								<li className="navbar-item">
									<Link to="/survey" className="navbar-link">Survey Form</Link>
								</li>
								<li className="navbar-item">
									<Link to="/scenario" className="navbar-link">Scenario</Link>
								</li>
							</ul>
						</div>
					</div>
				 </div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
}

export default () => (
	<StaticQuery
		query={graphql`
			query NavbarQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "service-post" } } }
				) {
					edges {
						node {
							excerpt(pruneLength: 400)
							id
							fields {
								slug
							}
							frontmatter {
								title
								page {
									heading
								},
								category
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <Navbar data={data} count={count} />}
	/>
)
