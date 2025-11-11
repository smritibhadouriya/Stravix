import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Main = lazy(() => import('../Component/Mainpage'))
const Loading = lazy(() => import('../Component/Loading'))
const Home =lazy(()=> import ('../Pages/Home'))
const CaseStudy =lazy(()=> import ('../Pages/Casestudy'))
const CasestudySingle =lazy(()=> import ('../Pages/CasestudySingle'))
const Team =lazy(()=>import ('../Pages/Team'))
const Digital =lazy(()=>import ('../Pages/Service/Digital'))
const Performance =lazy(()=>import ('../Pages/Service/Performance'))
const Social =lazy(()=>import ('../Pages/Service/Social'))
const Pr =lazy(()=>import ('../Pages/Service/Pr'))
const Creative =lazy(()=>import ('../Pages/Service/Creative'))
const Branding =lazy(()=>import ('../Pages/Service/Branding'))
const Terms =lazy(()=>import ('../Pages/Tearms'))
const Privacy =lazy(()=>import ('../Pages/Service/Policy'))
const Auth = () => {
  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
       <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/case-studies" element={<CaseStudy/>} />
            <Route path="/:slug" element={<CasestudySingle />} />
           <Route path="/team" element={<Team/>} />
           <Route path="/services/Branding" element={<Branding/>} />
           <Route path="/services/Creative" element={<Creative/>} />
           <Route path="/services/Social" element={<Social/>} />
           <Route path="/services/Pr" element={<Pr/>} />
           <Route path="/services/Digital" element={<Digital/>} />
           <Route path="/services/Performance" element={<Performance/>} />
           <Route path="/legal/privacy" element={<Privacy/>} />
           <Route path="/legal/terms" element={<Terms/>} />
          
           

          </Route>
{/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </Suspense>
    </BrowserRouter>
      </>
  ) 
}
export default Auth 