import * as cdktf from 'cdktf';
import { DataKubernetesPodSpecInitContainerEnvList,
DataKubernetesPodSpecInitContainerEnvFromList,
DataKubernetesPodSpecInitContainerLifecycleList,
DataKubernetesPodSpecInitContainerLivenessProbeList,
DataKubernetesPodSpecAffinityList,
DataKubernetesPodSpecContainerList,
DataKubernetesPodSpecDnsConfigList,
DataKubernetesPodSpecHostAliasesList,
DataKubernetesPodSpecImagePullSecretsList } from './structs0'
export interface DataKubernetesPodSpecInitContainerPort {
}

export function dataKubernetesPodSpecInitContainerPortToTerraform(struct?: DataKubernetesPodSpecInitContainerPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // host_ip - computed: true, optional: false, required: false
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataKubernetesPodSpecInitContainerPortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerPortOutputReference {
    return new DataKubernetesPodSpecInitContainerPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerReadinessProbeExec {
}

export function dataKubernetesPodSpecInitContainerReadinessProbeExecToTerraform(struct?: DataKubernetesPodSpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerReadinessProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerReadinessProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeExecList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerReadinessProbeExecOutputReference {
    return new DataKubernetesPodSpecInitContainerReadinessProbeExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerReadinessProbeGrpc {
}

export function dataKubernetesPodSpecInitContainerReadinessProbeGrpcToTerraform(struct?: DataKubernetesPodSpecInitContainerReadinessProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerReadinessProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerReadinessProbeGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeGrpcList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerReadinessProbeGrpcOutputReference {
    return new DataKubernetesPodSpecInitContainerReadinessProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeader {
}

export function dataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeaderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeaderOutputReference {
    return new DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerReadinessProbeHttpGet {
}

export function dataKubernetesPodSpecInitContainerReadinessProbeHttpGetToTerraform(struct?: DataKubernetesPodSpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerReadinessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerReadinessProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  private _httpHeader = new DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeHttpGetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerReadinessProbeHttpGetOutputReference {
    return new DataKubernetesPodSpecInitContainerReadinessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerReadinessProbeTcpSocket {
}

export function dataKubernetesPodSpecInitContainerReadinessProbeTcpSocketToTerraform(struct?: DataKubernetesPodSpecInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerReadinessProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerReadinessProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeTcpSocketList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerReadinessProbeTcpSocketOutputReference {
    return new DataKubernetesPodSpecInitContainerReadinessProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerReadinessProbe {
}

export function dataKubernetesPodSpecInitContainerReadinessProbeToTerraform(struct?: DataKubernetesPodSpecInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerReadinessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerReadinessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec - computed: true, optional: false, required: false
  private _exec = new DataKubernetesPodSpecInitContainerReadinessProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // grpc - computed: true, optional: false, required: false
  private _grpc = new DataKubernetesPodSpecInitContainerReadinessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }

  // http_get - computed: true, optional: false, required: false
  private _httpGet = new DataKubernetesPodSpecInitContainerReadinessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  private _tcpSocket = new DataKubernetesPodSpecInitContainerReadinessProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}

export class DataKubernetesPodSpecInitContainerReadinessProbeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerReadinessProbeOutputReference {
    return new DataKubernetesPodSpecInitContainerReadinessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerResources {
}

export function dataKubernetesPodSpecInitContainerResourcesToTerraform(struct?: DataKubernetesPodSpecInitContainerResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktf.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktf.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}

export class DataKubernetesPodSpecInitContainerResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerResourcesOutputReference {
    return new DataKubernetesPodSpecInitContainerResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerSecurityContextCapabilities {
}

export function dataKubernetesPodSpecInitContainerSecurityContextCapabilitiesToTerraform(struct?: DataKubernetesPodSpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerSecurityContextCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerSecurityContextCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getListAttribute('drop');
  }
}

export class DataKubernetesPodSpecInitContainerSecurityContextCapabilitiesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerSecurityContextCapabilitiesOutputReference {
    return new DataKubernetesPodSpecInitContainerSecurityContextCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptions {
}

export function dataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptionsOutputReference {
    return new DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerSecurityContextSeccompProfile {
}

export function dataKubernetesPodSpecInitContainerSecurityContextSeccompProfileToTerraform(struct?: DataKubernetesPodSpecInitContainerSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerSecurityContextSeccompProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerSecurityContextSeccompProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // localhost_profile - computed: true, optional: false, required: false
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataKubernetesPodSpecInitContainerSecurityContextSeccompProfileList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerSecurityContextSeccompProfileOutputReference {
    return new DataKubernetesPodSpecInitContainerSecurityContextSeccompProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerSecurityContext {
}

export function dataKubernetesPodSpecInitContainerSecurityContextToTerraform(struct?: DataKubernetesPodSpecInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataKubernetesPodSpecInitContainerSecurityContextCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  private _seLinuxOptions = new DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptionsList(this, "se_linux_options", false);
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }

  // seccomp_profile - computed: true, optional: false, required: false
  private _seccompProfile = new DataKubernetesPodSpecInitContainerSecurityContextSeccompProfileList(this, "seccomp_profile", false);
  public get seccompProfile() {
    return this._seccompProfile;
  }
}

export class DataKubernetesPodSpecInitContainerSecurityContextList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerSecurityContextOutputReference {
    return new DataKubernetesPodSpecInitContainerSecurityContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerStartupProbeExec {
}

export function dataKubernetesPodSpecInitContainerStartupProbeExecToTerraform(struct?: DataKubernetesPodSpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerStartupProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerStartupProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeExecList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerStartupProbeExecOutputReference {
    return new DataKubernetesPodSpecInitContainerStartupProbeExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerStartupProbeGrpc {
}

export function dataKubernetesPodSpecInitContainerStartupProbeGrpcToTerraform(struct?: DataKubernetesPodSpecInitContainerStartupProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerStartupProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerStartupProbeGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeGrpcList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerStartupProbeGrpcOutputReference {
    return new DataKubernetesPodSpecInitContainerStartupProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeader {
}

export function dataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeaderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeaderOutputReference {
    return new DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerStartupProbeHttpGet {
}

export function dataKubernetesPodSpecInitContainerStartupProbeHttpGetToTerraform(struct?: DataKubernetesPodSpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerStartupProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerStartupProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  private _httpHeader = new DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeHttpGetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerStartupProbeHttpGetOutputReference {
    return new DataKubernetesPodSpecInitContainerStartupProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerStartupProbeTcpSocket {
}

export function dataKubernetesPodSpecInitContainerStartupProbeTcpSocketToTerraform(struct?: DataKubernetesPodSpecInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerStartupProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerStartupProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeTcpSocketList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerStartupProbeTcpSocketOutputReference {
    return new DataKubernetesPodSpecInitContainerStartupProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerStartupProbe {
}

export function dataKubernetesPodSpecInitContainerStartupProbeToTerraform(struct?: DataKubernetesPodSpecInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerStartupProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec - computed: true, optional: false, required: false
  private _exec = new DataKubernetesPodSpecInitContainerStartupProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // grpc - computed: true, optional: false, required: false
  private _grpc = new DataKubernetesPodSpecInitContainerStartupProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }

  // http_get - computed: true, optional: false, required: false
  private _httpGet = new DataKubernetesPodSpecInitContainerStartupProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  private _tcpSocket = new DataKubernetesPodSpecInitContainerStartupProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}

export class DataKubernetesPodSpecInitContainerStartupProbeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerStartupProbeOutputReference {
    return new DataKubernetesPodSpecInitContainerStartupProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainerVolumeMount {
}

export function dataKubernetesPodSpecInitContainerVolumeMountToTerraform(struct?: DataKubernetesPodSpecInitContainerVolumeMount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerVolumeMountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainerVolumeMount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainerVolumeMount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // mount_propagation - computed: true, optional: false, required: false
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}

export class DataKubernetesPodSpecInitContainerVolumeMountList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerVolumeMountOutputReference {
    return new DataKubernetesPodSpecInitContainerVolumeMountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecInitContainer {
}

export function dataKubernetesPodSpecInitContainerToTerraform(struct?: DataKubernetesPodSpecInitContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecInitContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecInitContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecInitContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataKubernetesPodSpecInitContainerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // env_from - computed: true, optional: false, required: false
  private _envFrom = new DataKubernetesPodSpecInitContainerEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // lifecycle - computed: true, optional: false, required: false
  private _lifecycle = new DataKubernetesPodSpecInitContainerLifecycleList(this, "lifecycle", false);
  public get lifecycle() {
    return this._lifecycle;
  }

  // liveness_probe - computed: true, optional: false, required: false
  private _livenessProbe = new DataKubernetesPodSpecInitContainerLivenessProbeList(this, "liveness_probe", false);
  public get livenessProbe() {
    return this._livenessProbe;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  private _port = new DataKubernetesPodSpecInitContainerPortList(this, "port", false);
  public get port() {
    return this._port;
  }

  // readiness_probe - computed: true, optional: false, required: false
  private _readinessProbe = new DataKubernetesPodSpecInitContainerReadinessProbeList(this, "readiness_probe", false);
  public get readinessProbe() {
    return this._readinessProbe;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataKubernetesPodSpecInitContainerResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataKubernetesPodSpecInitContainerSecurityContextList(this, "security_context", false);
  public get securityContext() {
    return this._securityContext;
  }

  // startup_probe - computed: true, optional: false, required: false
  private _startupProbe = new DataKubernetesPodSpecInitContainerStartupProbeList(this, "startup_probe", false);
  public get startupProbe() {
    return this._startupProbe;
  }

  // stdin - computed: true, optional: false, required: false
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }

  // stdin_once - computed: true, optional: false, required: false
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }

  // termination_message_path - computed: true, optional: false, required: false
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }

  // termination_message_policy - computed: true, optional: false, required: false
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }

  // tty - computed: true, optional: false, required: false
  public get tty() {
    return this.getBooleanAttribute('tty');
  }

  // volume_mount - computed: true, optional: false, required: false
  private _volumeMount = new DataKubernetesPodSpecInitContainerVolumeMountList(this, "volume_mount", false);
  public get volumeMount() {
    return this._volumeMount;
  }

  // working_dir - computed: true, optional: false, required: false
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}

export class DataKubernetesPodSpecInitContainerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecInitContainerOutputReference {
    return new DataKubernetesPodSpecInitContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecReadinessGate {
}

export function dataKubernetesPodSpecReadinessGateToTerraform(struct?: DataKubernetesPodSpecReadinessGate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecReadinessGateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecReadinessGate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecReadinessGate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
}

export class DataKubernetesPodSpecReadinessGateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecReadinessGateOutputReference {
    return new DataKubernetesPodSpecReadinessGateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecSecurityContextSeLinuxOptions {
}

export function dataKubernetesPodSpecSecurityContextSeLinuxOptionsToTerraform(struct?: DataKubernetesPodSpecSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecSecurityContextSeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecSecurityContextSeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataKubernetesPodSpecSecurityContextSeLinuxOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecSecurityContextSeLinuxOptionsOutputReference {
    return new DataKubernetesPodSpecSecurityContextSeLinuxOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecSecurityContextSeccompProfile {
}

export function dataKubernetesPodSpecSecurityContextSeccompProfileToTerraform(struct?: DataKubernetesPodSpecSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecSecurityContextSeccompProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecSecurityContextSeccompProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // localhost_profile - computed: true, optional: false, required: false
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataKubernetesPodSpecSecurityContextSeccompProfileList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecSecurityContextSeccompProfileOutputReference {
    return new DataKubernetesPodSpecSecurityContextSeccompProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecSecurityContextSysctl {
}

export function dataKubernetesPodSpecSecurityContextSysctlToTerraform(struct?: DataKubernetesPodSpecSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecSecurityContextSysctlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecSecurityContextSysctl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecSecurityContextSysctl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataKubernetesPodSpecSecurityContextSysctlList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecSecurityContextSysctlOutputReference {
    return new DataKubernetesPodSpecSecurityContextSysctlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecSecurityContext {
}

export function dataKubernetesPodSpecSecurityContextToTerraform(struct?: DataKubernetesPodSpecSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_group - computed: true, optional: false, required: false
  public get fsGroup() {
    return this.getStringAttribute('fs_group');
  }

  // fs_group_change_policy - computed: true, optional: false, required: false
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  private _seLinuxOptions = new DataKubernetesPodSpecSecurityContextSeLinuxOptionsList(this, "se_linux_options", false);
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }

  // seccomp_profile - computed: true, optional: false, required: false
  private _seccompProfile = new DataKubernetesPodSpecSecurityContextSeccompProfileList(this, "seccomp_profile", false);
  public get seccompProfile() {
    return this._seccompProfile;
  }

  // supplemental_groups - computed: true, optional: false, required: false
  public get supplementalGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('supplemental_groups')));
  }

  // sysctl - computed: true, optional: false, required: false
  private _sysctl = new DataKubernetesPodSpecSecurityContextSysctlList(this, "sysctl", false);
  public get sysctl() {
    return this._sysctl;
  }
}

export class DataKubernetesPodSpecSecurityContextList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecSecurityContextOutputReference {
    return new DataKubernetesPodSpecSecurityContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecToleration {
}

export function dataKubernetesPodSpecTolerationToTerraform(struct?: DataKubernetesPodSpecToleration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecTolerationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecToleration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecToleration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // toleration_seconds - computed: true, optional: false, required: false
  public get tolerationSeconds() {
    return this.getStringAttribute('toleration_seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataKubernetesPodSpecTolerationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecTolerationOutputReference {
    return new DataKubernetesPodSpecTolerationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressions {
}

export function dataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform(struct?: DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressionsOutputReference {
    return new DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecTopologySpreadConstraintLabelSelector {
}

export function dataKubernetesPodSpecTopologySpreadConstraintLabelSelectorToTerraform(struct?: DataKubernetesPodSpecTopologySpreadConstraintLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecTopologySpreadConstraintLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecTopologySpreadConstraintLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expressions - computed: true, optional: false, required: false
  private _matchExpressions = new DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorOutputReference {
    return new DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecTopologySpreadConstraint {
}

export function dataKubernetesPodSpecTopologySpreadConstraintToTerraform(struct?: DataKubernetesPodSpecTopologySpreadConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecTopologySpreadConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecTopologySpreadConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecTopologySpreadConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_selector - computed: true, optional: false, required: false
  private _labelSelector = new DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorList(this, "label_selector", false);
  public get labelSelector() {
    return this._labelSelector;
  }

  // max_skew - computed: true, optional: false, required: false
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }

  // when_unsatisfiable - computed: true, optional: false, required: false
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
}

export class DataKubernetesPodSpecTopologySpreadConstraintList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecTopologySpreadConstraintOutputReference {
    return new DataKubernetesPodSpecTopologySpreadConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeAwsElasticBlockStore {
}

export function dataKubernetesPodSpecVolumeAwsElasticBlockStoreToTerraform(struct?: DataKubernetesPodSpecVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeAwsElasticBlockStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeAwsElasticBlockStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}

export class DataKubernetesPodSpecVolumeAwsElasticBlockStoreList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeAwsElasticBlockStoreOutputReference {
    return new DataKubernetesPodSpecVolumeAwsElasticBlockStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeAzureDisk {
}

export function dataKubernetesPodSpecVolumeAzureDiskToTerraform(struct?: DataKubernetesPodSpecVolumeAzureDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeAzureDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeAzureDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeAzureDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // caching_mode - computed: true, optional: false, required: false
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }

  // data_disk_uri - computed: true, optional: false, required: false
  public get dataDiskUri() {
    return this.getStringAttribute('data_disk_uri');
  }

  // disk_name - computed: true, optional: false, required: false
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataKubernetesPodSpecVolumeAzureDiskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeAzureDiskOutputReference {
    return new DataKubernetesPodSpecVolumeAzureDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeAzureFile {
}

export function dataKubernetesPodSpecVolumeAzureFileToTerraform(struct?: DataKubernetesPodSpecVolumeAzureFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeAzureFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeAzureFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeAzureFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // secret_namespace - computed: true, optional: false, required: false
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }

  // share_name - computed: true, optional: false, required: false
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
}

export class DataKubernetesPodSpecVolumeAzureFileList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeAzureFileOutputReference {
    return new DataKubernetesPodSpecVolumeAzureFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeCephFsSecretRef {
}

export function dataKubernetesPodSpecVolumeCephFsSecretRefToTerraform(struct?: DataKubernetesPodSpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeCephFsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeCephFsSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeCephFsSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataKubernetesPodSpecVolumeCephFsSecretRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeCephFsSecretRefOutputReference {
    return new DataKubernetesPodSpecVolumeCephFsSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeCephFs {
}

export function dataKubernetesPodSpecVolumeCephFsToTerraform(struct?: DataKubernetesPodSpecVolumeCephFs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeCephFsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeCephFs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeCephFs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitors - computed: true, optional: false, required: false
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_file - computed: true, optional: false, required: false
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }

  // secret_ref - computed: true, optional: false, required: false
  private _secretRef = new DataKubernetesPodSpecVolumeCephFsSecretRefList(this, "secret_ref", false);
  public get secretRef() {
    return this._secretRef;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataKubernetesPodSpecVolumeCephFsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeCephFsOutputReference {
    return new DataKubernetesPodSpecVolumeCephFsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeCinder {
}

export function dataKubernetesPodSpecVolumeCinderToTerraform(struct?: DataKubernetesPodSpecVolumeCinder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeCinderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeCinder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeCinder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}

export class DataKubernetesPodSpecVolumeCinderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeCinderOutputReference {
    return new DataKubernetesPodSpecVolumeCinderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeConfigMapItems {
}

export function dataKubernetesPodSpecVolumeConfigMapItemsToTerraform(struct?: DataKubernetesPodSpecVolumeConfigMapItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeConfigMapItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeConfigMapItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeConfigMapItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodSpecVolumeConfigMapItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeConfigMapItemsOutputReference {
    return new DataKubernetesPodSpecVolumeConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeConfigMap {
}

export function dataKubernetesPodSpecVolumeConfigMapToTerraform(struct?: DataKubernetesPodSpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeConfigMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeConfigMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodSpecVolumeConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataKubernetesPodSpecVolumeConfigMapList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeConfigMapOutputReference {
    return new DataKubernetesPodSpecVolumeConfigMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeCsiNodePublishSecretRef {
}

export function dataKubernetesPodSpecVolumeCsiNodePublishSecretRefToTerraform(struct?: DataKubernetesPodSpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeCsiNodePublishSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeCsiNodePublishSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataKubernetesPodSpecVolumeCsiNodePublishSecretRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeCsiNodePublishSecretRefOutputReference {
    return new DataKubernetesPodSpecVolumeCsiNodePublishSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeCsi {
}

export function dataKubernetesPodSpecVolumeCsiToTerraform(struct?: DataKubernetesPodSpecVolumeCsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeCsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeCsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // node_publish_secret_ref - computed: true, optional: false, required: false
  private _nodePublishSecretRef = new DataKubernetesPodSpecVolumeCsiNodePublishSecretRefList(this, "node_publish_secret_ref", false);
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_attributes - computed: true, optional: false, required: false
  private _volumeAttributes = new cdktf.StringMap(this, "volume_attributes");
  public get volumeAttributes() {
    return this._volumeAttributes;
  }
}

export class DataKubernetesPodSpecVolumeCsiList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeCsiOutputReference {
    return new DataKubernetesPodSpecVolumeCsiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeDownwardApiItemsFieldRef {
}

export function dataKubernetesPodSpecVolumeDownwardApiItemsFieldRefToTerraform(struct?: DataKubernetesPodSpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeDownwardApiItemsFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeDownwardApiItemsFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}

export class DataKubernetesPodSpecVolumeDownwardApiItemsFieldRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeDownwardApiItemsFieldRefOutputReference {
    return new DataKubernetesPodSpecVolumeDownwardApiItemsFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRef {
}

export function dataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}

export class DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRefOutputReference {
    return new DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeDownwardApiItems {
}

export function dataKubernetesPodSpecVolumeDownwardApiItemsToTerraform(struct?: DataKubernetesPodSpecVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeDownwardApiItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeDownwardApiItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeDownwardApiItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_ref - computed: true, optional: false, required: false
  private _fieldRef = new DataKubernetesPodSpecVolumeDownwardApiItemsFieldRefList(this, "field_ref", false);
  public get fieldRef() {
    return this._fieldRef;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  private _resourceFieldRef = new DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRefList(this, "resource_field_ref", false);
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
}

export class DataKubernetesPodSpecVolumeDownwardApiItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeDownwardApiItemsOutputReference {
    return new DataKubernetesPodSpecVolumeDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeDownwardApi {
}

export function dataKubernetesPodSpecVolumeDownwardApiToTerraform(struct?: DataKubernetesPodSpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeDownwardApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeDownwardApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodSpecVolumeDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataKubernetesPodSpecVolumeDownwardApiList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeDownwardApiOutputReference {
    return new DataKubernetesPodSpecVolumeDownwardApiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeEmptyDir {
}

export function dataKubernetesPodSpecVolumeEmptyDirToTerraform(struct?: DataKubernetesPodSpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeEmptyDir | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeEmptyDir | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // size_limit - computed: true, optional: false, required: false
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
}

export class DataKubernetesPodSpecVolumeEmptyDirList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeEmptyDirOutputReference {
    return new DataKubernetesPodSpecVolumeEmptyDirOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeFc {
}

export function dataKubernetesPodSpecVolumeFcToTerraform(struct?: DataKubernetesPodSpecVolumeFc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeFc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeFc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_ww_ns - computed: true, optional: false, required: false
  public get targetWwNs() {
    return cdktf.Fn.tolist(this.getListAttribute('target_ww_ns'));
  }
}

export class DataKubernetesPodSpecVolumeFcList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeFcOutputReference {
    return new DataKubernetesPodSpecVolumeFcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeFlexVolumeSecretRef {
}

export function dataKubernetesPodSpecVolumeFlexVolumeSecretRefToTerraform(struct?: DataKubernetesPodSpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeFlexVolumeSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeFlexVolumeSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataKubernetesPodSpecVolumeFlexVolumeSecretRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeFlexVolumeSecretRefOutputReference {
    return new DataKubernetesPodSpecVolumeFlexVolumeSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeFlexVolume {
}

export function dataKubernetesPodSpecVolumeFlexVolumeToTerraform(struct?: DataKubernetesPodSpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeFlexVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeFlexVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: false
  private _secretRef = new DataKubernetesPodSpecVolumeFlexVolumeSecretRefList(this, "secret_ref", false);
  public get secretRef() {
    return this._secretRef;
  }
}

export class DataKubernetesPodSpecVolumeFlexVolumeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeFlexVolumeOutputReference {
    return new DataKubernetesPodSpecVolumeFlexVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeFlocker {
}

export function dataKubernetesPodSpecVolumeFlockerToTerraform(struct?: DataKubernetesPodSpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeFlocker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeFlocker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }

  // dataset_uuid - computed: true, optional: false, required: false
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
}

export class DataKubernetesPodSpecVolumeFlockerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeFlockerOutputReference {
    return new DataKubernetesPodSpecVolumeFlockerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeGcePersistentDisk {
}

export function dataKubernetesPodSpecVolumeGcePersistentDiskToTerraform(struct?: DataKubernetesPodSpecVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeGcePersistentDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeGcePersistentDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // pd_name - computed: true, optional: false, required: false
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataKubernetesPodSpecVolumeGcePersistentDiskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeGcePersistentDiskOutputReference {
    return new DataKubernetesPodSpecVolumeGcePersistentDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeGitRepo {
}

export function dataKubernetesPodSpecVolumeGitRepoToTerraform(struct?: DataKubernetesPodSpecVolumeGitRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeGitRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeGitRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }
}

export class DataKubernetesPodSpecVolumeGitRepoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeGitRepoOutputReference {
    return new DataKubernetesPodSpecVolumeGitRepoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeGlusterfs {
}

export function dataKubernetesPodSpecVolumeGlusterfsToTerraform(struct?: DataKubernetesPodSpecVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeGlusterfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeGlusterfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoints_name - computed: true, optional: false, required: false
  public get endpointsName() {
    return this.getStringAttribute('endpoints_name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataKubernetesPodSpecVolumeGlusterfsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeGlusterfsOutputReference {
    return new DataKubernetesPodSpecVolumeGlusterfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeHostPath {
}

export function dataKubernetesPodSpecVolumeHostPathToTerraform(struct?: DataKubernetesPodSpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeHostPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeHostPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataKubernetesPodSpecVolumeHostPathList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeHostPathOutputReference {
    return new DataKubernetesPodSpecVolumeHostPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeIscsi {
}

export function dataKubernetesPodSpecVolumeIscsiToTerraform(struct?: DataKubernetesPodSpecVolumeIscsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeIscsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeIscsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // iqn - computed: true, optional: false, required: false
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // iscsi_interface - computed: true, optional: false, required: false
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_portal - computed: true, optional: false, required: false
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
}

export class DataKubernetesPodSpecVolumeIscsiList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeIscsiOutputReference {
    return new DataKubernetesPodSpecVolumeIscsiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeLocal {
}

export function dataKubernetesPodSpecVolumeLocalToTerraform(struct?: DataKubernetesPodSpecVolumeLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeLocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodSpecVolumeLocalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeLocalOutputReference {
    return new DataKubernetesPodSpecVolumeLocalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeNfs {
}

export function dataKubernetesPodSpecVolumeNfsToTerraform(struct?: DataKubernetesPodSpecVolumeNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeNfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeNfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataKubernetesPodSpecVolumeNfsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeNfsOutputReference {
    return new DataKubernetesPodSpecVolumeNfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumePersistentVolumeClaim {
}

export function dataKubernetesPodSpecVolumePersistentVolumeClaimToTerraform(struct?: DataKubernetesPodSpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumePersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumePersistentVolumeClaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumePersistentVolumeClaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claim_name - computed: true, optional: false, required: false
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataKubernetesPodSpecVolumePersistentVolumeClaimList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumePersistentVolumeClaimOutputReference {
    return new DataKubernetesPodSpecVolumePersistentVolumeClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumePhotonPersistentDisk {
}

export function dataKubernetesPodSpecVolumePhotonPersistentDiskToTerraform(struct?: DataKubernetesPodSpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumePhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumePhotonPersistentDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumePhotonPersistentDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // pd_id - computed: true, optional: false, required: false
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
}

export class DataKubernetesPodSpecVolumePhotonPersistentDiskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumePhotonPersistentDiskOutputReference {
    return new DataKubernetesPodSpecVolumePhotonPersistentDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItems {
}

export function dataKubernetesPodSpecVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItemsOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjectedSourcesConfigMap {
}

export function dataKubernetesPodSpecVolumeProjectedSourcesConfigMapToTerraform(struct?: DataKubernetesPodSpecVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjectedSourcesConfigMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjectedSourcesConfigMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesConfigMapList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedSourcesConfigMapOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedSourcesConfigMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRef {
}

export function dataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
}

export function dataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItems {
}

export function dataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_ref - computed: true, optional: false, required: false
  private _fieldRef = new DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRefList(this, "field_ref", false);
  public get fieldRef() {
    return this._fieldRef;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  private _resourceFieldRef = new DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefList(this, "resource_field_ref", false);
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjectedSourcesDownwardApi {
}

export function dataKubernetesPodSpecVolumeProjectedSourcesDownwardApiToTerraform(struct?: DataKubernetesPodSpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjectedSourcesDownwardApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjectedSourcesDownwardApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjectedSourcesSecretItems {
}

export function dataKubernetesPodSpecVolumeProjectedSourcesSecretItemsToTerraform(struct?: DataKubernetesPodSpecVolumeProjectedSourcesSecretItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjectedSourcesSecretItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjectedSourcesSecretItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesSecretItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedSourcesSecretItemsOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjectedSourcesSecret {
}

export function dataKubernetesPodSpecVolumeProjectedSourcesSecretToTerraform(struct?: DataKubernetesPodSpecVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjectedSourcesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjectedSourcesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodSpecVolumeProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesSecretList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedSourcesSecretOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedSourcesSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountToken {
}

export function dataKubernetesPodSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // expiration_seconds - computed: true, optional: false, required: false
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountTokenList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountTokenOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjectedSources {
}

export function dataKubernetesPodSpecVolumeProjectedSourcesToTerraform(struct?: DataKubernetesPodSpecVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjectedSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjectedSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_map - computed: true, optional: false, required: false
  private _configMap = new DataKubernetesPodSpecVolumeProjectedSourcesConfigMapList(this, "config_map", false);
  public get configMap() {
    return this._configMap;
  }

  // downward_api - computed: true, optional: false, required: false
  private _downwardApi = new DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiList(this, "downward_api", false);
  public get downwardApi() {
    return this._downwardApi;
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataKubernetesPodSpecVolumeProjectedSourcesSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }

  // service_account_token - computed: true, optional: false, required: false
  private _serviceAccountToken = new DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountTokenList(this, "service_account_token", false);
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
}

export class DataKubernetesPodSpecVolumeProjectedSourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedSourcesOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeProjected {
}

export function dataKubernetesPodSpecVolumeProjectedToTerraform(struct?: DataKubernetesPodSpecVolumeProjected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeProjected | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeProjected | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataKubernetesPodSpecVolumeProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
}

export class DataKubernetesPodSpecVolumeProjectedList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeProjectedOutputReference {
    return new DataKubernetesPodSpecVolumeProjectedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeQuobyte {
}

export function dataKubernetesPodSpecVolumeQuobyteToTerraform(struct?: DataKubernetesPodSpecVolumeQuobyte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeQuobyte | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeQuobyte | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}

export class DataKubernetesPodSpecVolumeQuobyteList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeQuobyteOutputReference {
    return new DataKubernetesPodSpecVolumeQuobyteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeRbdSecretRef {
}

export function dataKubernetesPodSpecVolumeRbdSecretRefToTerraform(struct?: DataKubernetesPodSpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeRbdSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeRbdSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataKubernetesPodSpecVolumeRbdSecretRefList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeRbdSecretRefOutputReference {
    return new DataKubernetesPodSpecVolumeRbdSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeRbd {
}

export function dataKubernetesPodSpecVolumeRbdToTerraform(struct?: DataKubernetesPodSpecVolumeRbd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeRbd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeRbd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceph_monitors - computed: true, optional: false, required: false
  public get cephMonitors() {
    return cdktf.Fn.tolist(this.getListAttribute('ceph_monitors'));
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // keyring - computed: true, optional: false, required: false
  public get keyring() {
    return this.getStringAttribute('keyring');
  }

  // rados_user - computed: true, optional: false, required: false
  public get radosUser() {
    return this.getStringAttribute('rados_user');
  }

  // rbd_image - computed: true, optional: false, required: false
  public get rbdImage() {
    return this.getStringAttribute('rbd_image');
  }

  // rbd_pool - computed: true, optional: false, required: false
  public get rbdPool() {
    return this.getStringAttribute('rbd_pool');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: false
  private _secretRef = new DataKubernetesPodSpecVolumeRbdSecretRefList(this, "secret_ref", false);
  public get secretRef() {
    return this._secretRef;
  }
}

export class DataKubernetesPodSpecVolumeRbdList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeRbdOutputReference {
    return new DataKubernetesPodSpecVolumeRbdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeSecretItems {
}

export function dataKubernetesPodSpecVolumeSecretItemsToTerraform(struct?: DataKubernetesPodSpecVolumeSecretItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeSecretItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeSecretItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeSecretItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKubernetesPodSpecVolumeSecretItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeSecretItemsOutputReference {
    return new DataKubernetesPodSpecVolumeSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeSecret {
}

export function dataKubernetesPodSpecVolumeSecretToTerraform(struct?: DataKubernetesPodSpecVolumeSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataKubernetesPodSpecVolumeSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}

export class DataKubernetesPodSpecVolumeSecretList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeSecretOutputReference {
    return new DataKubernetesPodSpecVolumeSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolumeVsphereVolume {
}

export function dataKubernetesPodSpecVolumeVsphereVolumeToTerraform(struct?: DataKubernetesPodSpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolumeVsphereVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolumeVsphereVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // volume_path - computed: true, optional: false, required: false
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
}

export class DataKubernetesPodSpecVolumeVsphereVolumeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeVsphereVolumeOutputReference {
    return new DataKubernetesPodSpecVolumeVsphereVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpecVolume {
}

export function dataKubernetesPodSpecVolumeToTerraform(struct?: DataKubernetesPodSpecVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpecVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpecVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_elastic_block_store - computed: true, optional: false, required: false
  private _awsElasticBlockStore = new DataKubernetesPodSpecVolumeAwsElasticBlockStoreList(this, "aws_elastic_block_store", false);
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }

  // azure_disk - computed: true, optional: false, required: false
  private _azureDisk = new DataKubernetesPodSpecVolumeAzureDiskList(this, "azure_disk", false);
  public get azureDisk() {
    return this._azureDisk;
  }

  // azure_file - computed: true, optional: false, required: false
  private _azureFile = new DataKubernetesPodSpecVolumeAzureFileList(this, "azure_file", false);
  public get azureFile() {
    return this._azureFile;
  }

  // ceph_fs - computed: true, optional: false, required: false
  private _cephFs = new DataKubernetesPodSpecVolumeCephFsList(this, "ceph_fs", false);
  public get cephFs() {
    return this._cephFs;
  }

  // cinder - computed: true, optional: false, required: false
  private _cinder = new DataKubernetesPodSpecVolumeCinderList(this, "cinder", false);
  public get cinder() {
    return this._cinder;
  }

  // config_map - computed: true, optional: false, required: false
  private _configMap = new DataKubernetesPodSpecVolumeConfigMapList(this, "config_map", false);
  public get configMap() {
    return this._configMap;
  }

  // csi - computed: true, optional: false, required: false
  private _csi = new DataKubernetesPodSpecVolumeCsiList(this, "csi", false);
  public get csi() {
    return this._csi;
  }

  // downward_api - computed: true, optional: false, required: false
  private _downwardApi = new DataKubernetesPodSpecVolumeDownwardApiList(this, "downward_api", false);
  public get downwardApi() {
    return this._downwardApi;
  }

  // empty_dir - computed: true, optional: false, required: false
  private _emptyDir = new DataKubernetesPodSpecVolumeEmptyDirList(this, "empty_dir", false);
  public get emptyDir() {
    return this._emptyDir;
  }

  // fc - computed: true, optional: false, required: false
  private _fc = new DataKubernetesPodSpecVolumeFcList(this, "fc", false);
  public get fc() {
    return this._fc;
  }

  // flex_volume - computed: true, optional: false, required: false
  private _flexVolume = new DataKubernetesPodSpecVolumeFlexVolumeList(this, "flex_volume", false);
  public get flexVolume() {
    return this._flexVolume;
  }

  // flocker - computed: true, optional: false, required: false
  private _flocker = new DataKubernetesPodSpecVolumeFlockerList(this, "flocker", false);
  public get flocker() {
    return this._flocker;
  }

  // gce_persistent_disk - computed: true, optional: false, required: false
  private _gcePersistentDisk = new DataKubernetesPodSpecVolumeGcePersistentDiskList(this, "gce_persistent_disk", false);
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }

  // git_repo - computed: true, optional: false, required: false
  private _gitRepo = new DataKubernetesPodSpecVolumeGitRepoList(this, "git_repo", false);
  public get gitRepo() {
    return this._gitRepo;
  }

  // glusterfs - computed: true, optional: false, required: false
  private _glusterfs = new DataKubernetesPodSpecVolumeGlusterfsList(this, "glusterfs", false);
  public get glusterfs() {
    return this._glusterfs;
  }

  // host_path - computed: true, optional: false, required: false
  private _hostPath = new DataKubernetesPodSpecVolumeHostPathList(this, "host_path", false);
  public get hostPath() {
    return this._hostPath;
  }

  // iscsi - computed: true, optional: false, required: false
  private _iscsi = new DataKubernetesPodSpecVolumeIscsiList(this, "iscsi", false);
  public get iscsi() {
    return this._iscsi;
  }

  // local - computed: true, optional: false, required: false
  private _local = new DataKubernetesPodSpecVolumeLocalList(this, "local", false);
  public get local() {
    return this._local;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nfs - computed: true, optional: false, required: false
  private _nfs = new DataKubernetesPodSpecVolumeNfsList(this, "nfs", false);
  public get nfs() {
    return this._nfs;
  }

  // persistent_volume_claim - computed: true, optional: false, required: false
  private _persistentVolumeClaim = new DataKubernetesPodSpecVolumePersistentVolumeClaimList(this, "persistent_volume_claim", false);
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }

  // photon_persistent_disk - computed: true, optional: false, required: false
  private _photonPersistentDisk = new DataKubernetesPodSpecVolumePhotonPersistentDiskList(this, "photon_persistent_disk", false);
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }

  // projected - computed: true, optional: false, required: false
  private _projected = new DataKubernetesPodSpecVolumeProjectedList(this, "projected", false);
  public get projected() {
    return this._projected;
  }

  // quobyte - computed: true, optional: false, required: false
  private _quobyte = new DataKubernetesPodSpecVolumeQuobyteList(this, "quobyte", false);
  public get quobyte() {
    return this._quobyte;
  }

  // rbd - computed: true, optional: false, required: false
  private _rbd = new DataKubernetesPodSpecVolumeRbdList(this, "rbd", false);
  public get rbd() {
    return this._rbd;
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataKubernetesPodSpecVolumeSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }

  // vsphere_volume - computed: true, optional: false, required: false
  private _vsphereVolume = new DataKubernetesPodSpecVolumeVsphereVolumeList(this, "vsphere_volume", false);
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
}

export class DataKubernetesPodSpecVolumeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecVolumeOutputReference {
    return new DataKubernetesPodSpecVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodSpec {
}

export function dataKubernetesPodSpecToTerraform(struct?: DataKubernetesPodSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPodSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPodSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_deadline_seconds - computed: true, optional: false, required: false
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }

  // affinity - computed: true, optional: false, required: false
  private _affinity = new DataKubernetesPodSpecAffinityList(this, "affinity", false);
  public get affinity() {
    return this._affinity;
  }

  // automount_service_account_token - computed: true, optional: false, required: false
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataKubernetesPodSpecContainerList(this, "container", false);
  public get container() {
    return this._container;
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new DataKubernetesPodSpecDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // dns_policy - computed: true, optional: false, required: false
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // enable_service_links - computed: true, optional: false, required: false
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }

  // host_aliases - computed: true, optional: false, required: false
  private _hostAliases = new DataKubernetesPodSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }

  // host_ipc - computed: true, optional: false, required: false
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }

  // host_network - computed: true, optional: false, required: false
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }

  // host_pid - computed: true, optional: false, required: false
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // image_pull_secrets - computed: true, optional: false, required: false
  private _imagePullSecrets = new DataKubernetesPodSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }

  // init_container - computed: true, optional: false, required: false
  private _initContainer = new DataKubernetesPodSpecInitContainerList(this, "init_container", false);
  public get initContainer() {
    return this._initContainer;
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // priority_class_name - computed: true, optional: false, required: false
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }

  // readiness_gate - computed: true, optional: false, required: false
  private _readinessGate = new DataKubernetesPodSpecReadinessGateList(this, "readiness_gate", false);
  public get readinessGate() {
    return this._readinessGate;
  }

  // restart_policy - computed: true, optional: false, required: false
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }

  // runtime_class_name - computed: true, optional: false, required: false
  public get runtimeClassName() {
    return this.getStringAttribute('runtime_class_name');
  }

  // scheduler_name - computed: true, optional: false, required: false
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataKubernetesPodSpecSecurityContextList(this, "security_context", false);
  public get securityContext() {
    return this._securityContext;
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // share_process_namespace - computed: true, optional: false, required: false
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // termination_grace_period_seconds - computed: true, optional: false, required: false
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }

  // toleration - computed: true, optional: false, required: false
  private _toleration = new DataKubernetesPodSpecTolerationList(this, "toleration", false);
  public get toleration() {
    return this._toleration;
  }

  // topology_spread_constraint - computed: true, optional: false, required: false
  private _topologySpreadConstraint = new DataKubernetesPodSpecTopologySpreadConstraintList(this, "topology_spread_constraint", false);
  public get topologySpreadConstraint() {
    return this._topologySpreadConstraint;
  }

  // volume - computed: true, optional: false, required: false
  private _volume = new DataKubernetesPodSpecVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
}

export class DataKubernetesPodSpecList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPodSpecOutputReference {
    return new DataKubernetesPodSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPodMetadata {
  /**
  * An unstructured key value map stored with the pod that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/data-sources/pod#annotations DataKubernetesPod#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/data-sources/pod#generate_name DataKubernetesPod#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the pod. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/data-sources/pod#labels DataKubernetesPod#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the pod, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/data-sources/pod#name DataKubernetesPod#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the pod must be unique.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/data-sources/pod#namespace DataKubernetesPod#namespace}
  */
  readonly namespace?: string;
}

export function dataKubernetesPodMetadataToTerraform(struct?: DataKubernetesPodMetadataOutputReference | DataKubernetesPodMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataKubernetesPodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKubernetesPodMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPodMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
