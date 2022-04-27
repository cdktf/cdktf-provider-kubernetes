// https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#metadata EndpointsV1#metadata}
  */
  readonly metadata: EndpointsV1Metadata;
  /**
  * subset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#subset EndpointsV1#subset}
  */
  readonly subset?: EndpointsV1Subset[] | cdktf.IResolvable;
}
export interface EndpointsV1Metadata {
  /**
  * An unstructured key value map stored with the endpoints that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#annotations EndpointsV1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#generate_name EndpointsV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the endpoints. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#labels EndpointsV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the endpoints, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#name EndpointsV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the endpoints must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#namespace EndpointsV1#namespace}
  */
  readonly namespace?: string;
}

export function endpointsV1MetadataToTerraform(struct?: EndpointsV1MetadataOutputReference | EndpointsV1Metadata): any {
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

export class EndpointsV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EndpointsV1Metadata | undefined {
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

  public set internalValue(value: EndpointsV1Metadata | undefined) {
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
export interface EndpointsV1SubsetAddress {
  /**
  * The Hostname of this endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#hostname EndpointsV1#hostname}
  */
  readonly hostname?: string;
  /**
  * The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#ip EndpointsV1#ip}
  */
  readonly ip: string;
  /**
  * Node hosting this endpoint. This can be used to determine endpoints local to a node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#node_name EndpointsV1#node_name}
  */
  readonly nodeName?: string;
}

export function endpointsV1SubsetAddressToTerraform(struct?: EndpointsV1SubsetAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}

export interface EndpointsV1SubsetNotReadyAddress {
  /**
  * The Hostname of this endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#hostname EndpointsV1#hostname}
  */
  readonly hostname?: string;
  /**
  * The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#ip EndpointsV1#ip}
  */
  readonly ip: string;
  /**
  * Node hosting this endpoint. This can be used to determine endpoints local to a node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#node_name EndpointsV1#node_name}
  */
  readonly nodeName?: string;
}

export function endpointsV1SubsetNotReadyAddressToTerraform(struct?: EndpointsV1SubsetNotReadyAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}

export interface EndpointsV1SubsetPort {
  /**
  * The name of this port within the endpoint. Must be a DNS_LABEL. Optional if only one Port is defined on this endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#name EndpointsV1#name}
  */
  readonly name?: string;
  /**
  * The port that will be exposed by this endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#port EndpointsV1#port}
  */
  readonly port: number;
  /**
  * The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#protocol EndpointsV1#protocol}
  */
  readonly protocol?: string;
}

export function endpointsV1SubsetPortToTerraform(struct?: EndpointsV1SubsetPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface EndpointsV1Subset {
  /**
  * address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#address EndpointsV1#address}
  */
  readonly address?: EndpointsV1SubsetAddress[] | cdktf.IResolvable;
  /**
  * not_ready_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#not_ready_address EndpointsV1#not_ready_address}
  */
  readonly notReadyAddress?: EndpointsV1SubsetNotReadyAddress[] | cdktf.IResolvable;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1#port EndpointsV1#port}
  */
  readonly port?: EndpointsV1SubsetPort[] | cdktf.IResolvable;
}

export function endpointsV1SubsetToTerraform(struct?: EndpointsV1Subset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(endpointsV1SubsetAddressToTerraform)(struct!.address),
    not_ready_address: cdktf.listMapper(endpointsV1SubsetNotReadyAddressToTerraform)(struct!.notReadyAddress),
    port: cdktf.listMapper(endpointsV1SubsetPortToTerraform)(struct!.port),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1 kubernetes_endpoints_v1}
*/
export class EndpointsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_endpoints_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints_v1 kubernetes_endpoints_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointsV1Config
  */
  public constructor(scope: Construct, id: string, config: EndpointsV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_endpoints_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.11.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
    this._subset = config.subset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new EndpointsV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: EndpointsV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // subset - computed: false, optional: true, required: false
  private _subset?: EndpointsV1Subset[] | cdktf.IResolvable; 
  public get subset() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('subset')));
  }
  public set subset(value: EndpointsV1Subset[] | cdktf.IResolvable) {
    this._subset = value;
  }
  public resetSubset() {
    this._subset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetInput() {
    return this._subset;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: endpointsV1MetadataToTerraform(this._metadata.internalValue),
      subset: cdktf.listMapper(endpointsV1SubsetToTerraform)(this._subset),
    };
  }
}
