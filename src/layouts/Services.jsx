import React from "react";
import Text from "../components/Text";
import Container from "../components/Container";
import Card from "../components/Card";
import word from "../assets/word.jpg";
import web from "../assets/website.jpg";
import social from "../assets/social.jpg";
import lead from "../assets/lead.jpg";
import email from "../assets/email.jpg";
import domain from "../assets/domain.jpg";
import seo from "../assets/seo.jpg";
import api from "../assets/api.jpg";
import Button from "../components/Button";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import Flex from "@/components/Flex";

const Services = () => {
  return (
    <div id="services" className="mt-12">
      {/* HEADER */}
      <div className="bg-[url(../src/assets/service.jpg)] text-white w-full bg-cover bg-center">
        <Text
          as="h1"
          className="text-center pt-12 text-4xl sm:text-5xl font-bold"
          text="OUR SERVICES"
        />
        <Text
          as="p"
          className="text-center pt-2 pb-8 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
          text="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        />
      </div>

      <Container>
        {/* GRID — RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <Card
            image={word}
            title="WordPress CMS"
            description="Build fast, secure, and fully customizable WordPress websites that are easy for you to manage."
            tags={["Themes & Plugins", "Elementor", "Database", "Evanto"]}
            scrollToId="wordpress-section"
          />

          <Card
            image={web}
            title="Responsive Website"
            description="Create modern, high-performance, mobile-friendly & optimized websites using clean code."
            tags={[
              "JavaScript",
              "ReactJS",
              "NextJS",
              "TailwindCSS",
              "UI libraries",
              "Figma",
            ]}
            scrollToId="responsive_web"
          />

          <Card
            image={social}
            title="Social Media Management"
            description="We will manage your social media pages with consistent posting, engaging content, and strategy-driven growth."
            tags={[
              "Google Analytics",
              "Canva",
              "Facebook",
              "Instagram",
              "Boosting",
            ]}
            scrollToId="social"
          />

          <Card
            image={lead}
            title="Lead generation (B2B, B2C)"
            description="We provide real, targeted leads through research, validation, and smart filtering — giving you high-quality prospects ready to convert."
            tags={[
              "Lead Generation",
              "B2B Outreach",
              "Prospecting",
              "Sales Funnel",
              "CRM Integration",
            ]}
            scrollToId="leadGen"
          />

          <Card
            image={email}
            title="E-mail Campaign Strategy"
            description="We create high-converting email campaigns with clean design, automation, and tracking — helping you build trust and boost revenue."
            tags={["Brevo", "Automated Emails", "Mailchimp", "SendGrid"]}
            scrollToId="emailCamp"
          />

          <Card
            image={domain}
            title="Domain & Hosting"
            description="We set up reliable domain and hosting with full configuration, security, and maintenance to keep your website fast, live, and protected."
            tags={["Web Hosting", "cPanel", "Cloud Hosting", "Server Setup"]}
            scrollToId="domHost"
          />
          <Card
            image={seo}
            title="SEO - On & Off"
            description="We set up reliable domain and hosting with full configuration, security, and maintenance to keep your website fast, live, and protected."
            tags={[
              "On-Page SEO",
              "Keyword Research",
              "Backlink Building",
              "Google Ranking",
            ]}
            scrollToId="seo"
          />
          <Card
            image={api}
            title="API Creation"
            description="We set up reliable domain and hosting with full configuration, security, and maintenance to keep your website fast, live, and protected."
            tags={[
              "Custom API",
              "REST API",
              "NodeJS API",
              "API Integration",
              "Backend Development",
            ]}
            scrollToId="api"
          />
        </div>

        {/* BUTTON */}

        <Flex className={"my-10 gap-6 justify-center"}>

          <HashLink smooth to="#contact">
          <Button className="block group">
            Ask About Services{" "}
            <span className="group-hover:text-[#07BB38] duration-200 group-hover:px-2 group-hover:font-bold group-hover:text-2xl">
              ?
            </span>
          </Button>
        </HashLink>

        <Link
          className="underline hover:text-blue-500 text-center sm:text-left"
          to="/custom-order"
        >
          <Button className="bg-[#07BB38] hover:bg-green-600 text-white group w-full border-white sm:w-auto">
            <div className="flex items-center gap-2 group-hover:gap-6 duration-75">
              <p className="group-hover:text-[22px] duration-75">
                Customize Your Order
              </p>
            </div>
          </Button>
        </Link>
        </Flex>
        
      </Container>
    </div>
  );
};

export default Services;
