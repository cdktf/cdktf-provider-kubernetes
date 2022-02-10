// https://www.terraform.io/docs/providers/kubernetes/d/mutating_webhook_configuration_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesMutatingWebhookConfigurationV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/mutating_webhook_configuration_v1#metadata DataKubernetesMutatingWebhookConfigurationV1#metadata}
  */
  readonly metadata: DataKubernetesMutatingWebhookConfigurationV1Metadata;
}
export class DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export class DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig extends cdktf.ComplexComputedList {

  // ca_bundle - computed: true, optional: false, required: false
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('service');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export class DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions extends cdktf.ComplexComputedList {

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
export class DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
}
export class DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions extends cdktf.ComplexComputedList {

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
export class DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
}
export class DataKubernetesMutatingWebhookConfigurationV1WebhookRule extends cdktf.ComplexComputedList {

  // api_groups - computed: true, optional: false, required: false
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }

  // api_versions - computed: true, optional: false, required: false
  public get apiVersions() {
    return this.getListAttribute('api_versions');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getListAttribute('operations');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export class DataKubernetesMutatingWebhookConfigurationV1Webhook extends cdktf.ComplexComputedList {

  // admission_review_versions - computed: true, optional: false, required: false
  public get admissionReviewVersions() {
    return this.getListAttribute('admission_review_versions');
  }

  // client_config - computed: true, optional: false, required: false
  public get clientConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('client_config');
  }

  // failure_policy - computed: true, optional: false, required: false
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }

  // match_policy - computed: true, optional: false, required: false
  public get matchPolicy() {
    return this.getStringAttribute('match_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_selector - computed: true, optional: false, required: false
  public get namespaceSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('namespace_selector');
  }

  // object_selector - computed: true, optional: false, required: false
  public get objectSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('object_selector');
  }

  // reinvocation_policy - computed: true, optional: false, required: false
  public get reinvocationPolicy() {
    return this.getStringAttribute('reinvocation_policy');
  }

  // rule - computed: true, optional: false, required: false
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule');
  }

  // side_effects - computed: true, optional: false, required: false
  public get sideEffects() {
    return this.getStringAttribute('side_effects');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export interface DataKubernetesMutatingWebhookConfigurationV1Metadata {
  /**
  * An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/mutating_webhook_configuration_v1#annotations DataKubernetesMutatingWebhookConfigurationV1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/mutating_webhook_configuration_v1#labels DataKubernetesMutatingWebhookConfigurationV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/mutating_webhook_configuration_v1#name DataKubernetesMutatingWebhookConfigurationV1#name}
  */
  readonly name?: string;
}

export function dataKubernetesMutatingWebhookConfigurationV1MetadataToTerraform(struct?: DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference | DataKubernetesMutatingWebhookConfigurationV1Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataKubernetesMutatingWebhookConfigurationV1Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesMutatingWebhookConfigurationV1Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/mutating_webhook_configuration_v1 kubernetes_mutating_webhook_configuration_v1}
*/
export class DataKubernetesMutatingWebhookConfigurationV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_mutating_webhook_configuration_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/mutating_webhook_configuration_v1 kubernetes_mutating_webhook_configuration_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesMutatingWebhookConfigurationV1Config
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesMutatingWebhookConfigurationV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_mutating_webhook_configuration_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // webhook - computed: true, optional: false, required: false
  public webhook(index: string) {
    return new DataKubernetesMutatingWebhookConfigurationV1Webhook(this, 'webhook', index, false);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataKubernetesMutatingWebhookConfigurationV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataKubernetesMutatingWebhookConfigurationV1MetadataToTerraform(this._metadata.internalValue),
    };
  }
}
