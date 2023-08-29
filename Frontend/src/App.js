import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './common.css';

import TrainerContextProvider from './context/TrainerContext';
import Lazy from './components/Lazy';
import ErrorPage from './components/ErrorPage';



function App() {
  const Home = lazy(() => import('./components/Home'));
 
  const Pricing = lazy(() => import('./components/Pricing'));
  const Contact = lazy(() => import('./components/Contact'));//
  const About = lazy(() => import('./components/About'));
  const SignIn = lazy(() => import('../src/screens/common/SignIn'));
  const AllMembers = lazy(() => import('../src/screens/common/AllMembers'));
  const AllTrainers = lazy(() => import('../src/screens/common/AllTrainers'));
  const AllLocalAdmins = lazy(() => import('../src/screens/common/AllLocalAdmins'));
  const AllBranches = lazy(() => import('../src/screens/common/AllBranches'));
  const AllBatches = lazy(() => import('../src/screens/common/AllBatches'));
  const AllPackages = lazy(() => import('../src/screens/common/AllPackages'));
  
  const MyTrainers = lazy(() => import('../src/screens/localadmin/MyTrainers'));
  const MyMembers = lazy(() => import('../src/screens/localadmin/MyMembers'));
  const PackagesList = lazy(() => import('../src/screens/member/PackagesList'));

  const Batches = lazy(() => import('../src/screens/localadmin/Batches'));
  const AdminPage = lazy(() => import('../src/screens/common/AdminPage'));
  const MemberPage = lazy(() => import('../src/screens/member/MemberPage'));
  const LocalAdminPage = lazy(() => import('../src/screens/common/LocalAdminPage'));
  const TrainerPage = lazy(() => import('../src/screens/common/TrainerPage'));
  const BranchPage = lazy(() => import('../src/screens/common/BranchPage'));
  const SignUp = lazy(() => import('./screens/common/SignUp'));
  const AddTrainer = lazy(() => import('../src/screens/common/AddTrainer'));
  const AddLocalAdmin = lazy(() => import('../src/screens/common/AddLocalAdmin'));
  const AddBranch = lazy(() => import('../src/screens/common/AddBranch')); 
  const AddPackage = lazy(() => import('../src/screens/common/AddPackage'));
  const AddBatch = lazy(() => import('../src/screens/common/AddBatch'));
  
  const PackageAdd = lazy(() => import('../src/screens/localadmin/PackageAdd'));
  const AllPackagesList = lazy(() => import('../src/screens/localadmin/AllPackagesList'));
  const AllBranchesList = lazy(() => import('../src/screens/localadmin/AllBranchesList'));

  const UpdatePackage = lazy(() => import('../src/screens/common/UpdatePackage'));
  const UpdateBatch = lazy(() => import('../src/screens/common/UpdateBatch'));
  const UpdateBranch = lazy(() => import('../src/screens/common/UpdateBranch'));
  const UpdateLocalAdmin = lazy(() => import('../src/screens/common/UpdateLocalAdmin'));
  const ProfileMember = lazy(() => import('../src/screens/member/ProfileMember'));
  const ProfileLocal = lazy(() => import('./screens/member/ProfileLocal'));
  const MyBranchPage = lazy(() => import('../src/screens/localadmin/MyBranchPage'));

  const TrainerMember = lazy(() => import('../src/screens/Trainer/TrainerMember'));
  const UpdateReport = lazy(() => import('../src/screens/Trainer/UpdateReport'));
  
  const PurchasePage = lazy(() => import('../src/screens/member/PurchasePage'));
  const AddReport = lazy(() => import('../src/screens/member/AddReport'));
  
  
  return (
    <TrainerContextProvider>
        <Suspense fallback={<Lazy />}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/price" component={Pricing} />
            <Route path="/contact" component={Contact} />            
            <Route path='/error' component={ErrorPage} />
            <Route path="/login" component={SignIn} />
            <Route path="/allmembers" component={AllMembers} />
            <Route path="/alltrainers" component={AllTrainers} />
            <Route path="/alllocaladmins" component={AllLocalAdmins} />
            <Route path="/allbranches" component={AllBranches} />
            <Route path="/allbatches" component={AllBatches} />
            <Route path="/allpackages" component={AllPackages} />
            
            <Route path="/adminpage" component={AdminPage} />
            <Route path="/memberpage" component={MemberPage} />
            <Route path="/localadminpage" component={LocalAdminPage} />
            <Route path="/branchpage" component={BranchPage} />
            <Route path="/mytrainers" component={MyTrainers} />
            <Route path="/mymembers" component={MyMembers} />

            <Route path="/trainerpage" component={TrainerPage} /> 
            <Route path="/register" component={SignUp} />          
            <Route path="/addtrainer" component={AddTrainer} />
            <Route path="/addlocaladmin" component={AddLocalAdmin} />
            <Route path="/addbranch" component={AddBranch} />
            <Route path="/addbatch" component={AddBatch} />
            <Route path="/addpackage" component={AddPackage} />
            <Route path="/trainermember" component={TrainerMember} />
            <Route path="/updateReport" component={UpdateReport} />
            
            <Route path="/packageslist" component={AllPackagesList} />
            <Route path="/packageadd" component={PackageAdd} />
            <Route path="/brancheslist" component={AllBranchesList} />
            <Route path="/updatepackage" component={UpdatePackage} />
            <Route path="/updatebatch" component={UpdateBatch} />
            <Route path="/updatebranch" component={UpdateBranch} />
            <Route path="/updatelocaladmin" component={UpdateLocalAdmin} />
            <Route path="/packages" component={PackagesList} />
            <Route path="/batches" component={Batches} />
            <Route path="/mybranchpage" component={MyBranchPage} />

            <Route path="/profilelocal" component={ProfileLocal} />
            <Route path="/profilemember" component={ProfileMember} />

            <Route path="/purchasepage" component={PurchasePage} />
            <Route path="/addreport" component={AddReport} />

          </Switch>
          </Router>
        </Suspense>
    </TrainerContextProvider>
  );
}

export default App;
