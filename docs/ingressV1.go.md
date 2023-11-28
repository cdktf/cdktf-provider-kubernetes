# `kubernetes_ingress_v1`

Refer to the Terraform Registory for docs: [`kubernetes_ingress_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1).

# `ingressV1` Submodule <a name="`ingressV1` Submodule" id="@cdktf/provider-kubernetes.ingressV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IngressV1 <a name="IngressV1" id="@cdktf/provider-kubernetes.ingressV1.IngressV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1 kubernetes_ingress_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1(scope Construct, id *string, config IngressV1Config) IngressV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config">IngressV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config">IngressV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.resetWaitForLoadBalancer">ResetWaitForLoadBalancer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putMetadata"></a>

```go
func PutMetadata(value IngressV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putSpec"></a>

```go
func PutSpec(value IngressV1Spec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putTimeouts"></a>

```go
func PutTimeouts(value IngressV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWaitForLoadBalancer` <a name="ResetWaitForLoadBalancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.resetWaitForLoadBalancer"></a>

```go
func ResetWaitForLoadBalancer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IngressV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.IngressV1_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.IngressV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.IngressV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.IngressV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IngressV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IngressV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IngressV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IngressV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference">IngressV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference">IngressV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.status">Status</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList">IngressV1StatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference">IngressV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.waitForLoadBalancerInput">WaitForLoadBalancerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.waitForLoadBalancer">WaitForLoadBalancer</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.metadata"></a>

```go
func Metadata() IngressV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference">IngressV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.spec"></a>

```go
func Spec() IngressV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference">IngressV1SpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.status"></a>

```go
func Status() IngressV1StatusList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList">IngressV1StatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.timeouts"></a>

```go
func Timeouts() IngressV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference">IngressV1TimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.metadataInput"></a>

```go
func MetadataInput() IngressV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.specInput"></a>

```go
func SpecInput() IngressV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForLoadBalancerInput`<sup>Optional</sup> <a name="WaitForLoadBalancerInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.waitForLoadBalancerInput"></a>

```go
func WaitForLoadBalancerInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `WaitForLoadBalancer`<sup>Required</sup> <a name="WaitForLoadBalancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.waitForLoadBalancer"></a>

```go
func WaitForLoadBalancer() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IngressV1Config <a name="IngressV1Config" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1Metadata,
	Spec: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1Spec,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1Timeouts,
	WaitForLoadBalancer: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#id IngressV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.waitForLoadBalancer">WaitForLoadBalancer</a></code> | <code>interface{}</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.metadata"></a>

```go
Metadata IngressV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#metadata IngressV1#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.spec"></a>

```go
Spec IngressV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#spec IngressV1#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#id IngressV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.timeouts"></a>

```go
Timeouts IngressV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#timeouts IngressV1#timeouts}

---

##### `WaitForLoadBalancer`<sup>Optional</sup> <a name="WaitForLoadBalancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.waitForLoadBalancer"></a>

```go
WaitForLoadBalancer interface{}
```

- *Type:* interface{}

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#wait_for_load_balancer IngressV1#wait_for_load_balancer}

---

### IngressV1Metadata <a name="IngressV1Metadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1Metadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the ingress, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace defines the space within which name of the ingress must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the ingress that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#annotations IngressV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#generate_name IngressV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the ingress.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#labels IngressV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the ingress, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#name IngressV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace defines the space within which name of the ingress must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#namespace IngressV1#namespace}

---

### IngressV1Spec <a name="IngressV1Spec" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1Spec {
	DefaultBackend: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1SpecDefaultBackend,
	IngressClassName: *string,
	Rule: interface{},
	Tls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.defaultBackend">DefaultBackend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a></code> | default_backend block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.ingressClassName">IngressClassName</a></code> | <code>*string</code> | ingressClassName is the name of an IngressClass cluster resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.tls">Tls</a></code> | <code>interface{}</code> | tls block. |

---

##### `DefaultBackend`<sup>Optional</sup> <a name="DefaultBackend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.defaultBackend"></a>

```go
DefaultBackend IngressV1SpecDefaultBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a>

default_backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#default_backend IngressV1#default_backend}

---

##### `IngressClassName`<sup>Optional</sup> <a name="IngressClassName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.ingressClassName"></a>

```go
IngressClassName *string
```

- *Type:* *string

ingressClassName is the name of an IngressClass cluster resource.

Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#ingress_class_name IngressV1#ingress_class_name}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#rule IngressV1#rule}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#tls IngressV1#tls}

---

### IngressV1SpecDefaultBackend <a name="IngressV1SpecDefaultBackend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecDefaultBackend {
	Resource: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1SpecDefaultBackendResource,
	Service: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1SpecDefaultBackendService,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a></code> | resource block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a></code> | service block. |

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend.property.resource"></a>

```go
Resource IngressV1SpecDefaultBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#resource IngressV1#resource}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend.property.service"></a>

```go
Service IngressV1SpecDefaultBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#service IngressV1#service}

---

### IngressV1SpecDefaultBackendResource <a name="IngressV1SpecDefaultBackendResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecDefaultBackendResource {
	ApiGroup: *string,
	Kind: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.apiGroup">ApiGroup</a></code> | <code>*string</code> | APIGroup is the group for the resource being referenced. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.kind">Kind</a></code> | <code>*string</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.name">Name</a></code> | <code>*string</code> | The name of the User to bind to. |

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.apiGroup"></a>

```go
ApiGroup *string
```

- *Type:* *string

APIGroup is the group for the resource being referenced.

If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#api_group IngressV1#api_group}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#kind IngressV1#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#name IngressV1#name}

---

### IngressV1SpecDefaultBackendService <a name="IngressV1SpecDefaultBackendService" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecDefaultBackendService {
	Name: *string,
	Port: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1SpecDefaultBackendServicePort,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the referenced service. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a></code> | port block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#name IngressV1#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService.property.port"></a>

```go
Port IngressV1SpecDefaultBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a>

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#port IngressV1#port}

---

### IngressV1SpecDefaultBackendServicePort <a name="IngressV1SpecDefaultBackendServicePort" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecDefaultBackendServicePort {
	Name: *string,
	Number: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the port of the referenced service. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort.property.number">Number</a></code> | <code>*f64</code> | Specifies the numerical port of the referenced service. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#name IngressV1#name}

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort.property.number"></a>

```go
Number *f64
```

- *Type:* *f64

Specifies the numerical port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#number IngressV1#number}

---

### IngressV1SpecRule <a name="IngressV1SpecRule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecRule {
	Host: *string,
	Http: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1SpecRuleHttp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule.property.host">Host</a></code> | <code>*string</code> | host is the fully qualified domain name of a network host, as defined by RFC 3986. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule.property.http">Http</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a></code> | http block. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule.property.host"></a>

```go
Host *string
```

- *Type:* *string

host is the fully qualified domain name of a network host, as defined by RFC 3986.

Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
the IP in the Spec of the parent Ingress.
2. The `:` delimiter is not respected because ports are not allowed.
Currently the port of an Ingress is implicitly :80 for http and
:443 for https.
Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.

host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If host is precise, the request matches this rule if the http host header is equal to Host. 2. If host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#host IngressV1#host}

---

##### `Http`<sup>Optional</sup> <a name="Http" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule.property.http"></a>

```go
Http IngressV1SpecRuleHttp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#http IngressV1#http}

---

### IngressV1SpecRuleHttp <a name="IngressV1SpecRuleHttp" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecRuleHttp {
	Path: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp.property.path">Path</a></code> | <code>interface{}</code> | path block. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp.property.path"></a>

```go
Path interface{}
```

- *Type:* interface{}

path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#path IngressV1#path}

---

### IngressV1SpecRuleHttpPath <a name="IngressV1SpecRuleHttpPath" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecRuleHttpPath {
	Backend: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1SpecRuleHttpPathBackend,
	Path: *string,
	PathType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a></code> | backend block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.path">Path</a></code> | <code>*string</code> | path is matched against the path of an incoming request. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.pathType">PathType</a></code> | <code>*string</code> | pathType determines the interpretation of the path matching. |

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.backend"></a>

```go
Backend IngressV1SpecRuleHttpPathBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#backend IngressV1#backend}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.path"></a>

```go
Path *string
```

- *Type:* *string

path is matched against the path of an incoming request.

Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/' and must be present when using PathType with value "Exact" or "Prefix".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#path IngressV1#path}

---

##### `PathType`<sup>Optional</sup> <a name="PathType" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.pathType"></a>

```go
PathType *string
```

- *Type:* *string

pathType determines the interpretation of the path matching.

PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is
done on a path element by element basis. A path element refers is the
list of labels in the path split by the '/' separator. A request is a
match for path p if every p is an element-wise prefix of p of the
request path. Note that if the last element of the path is a substring
of the last element in request path, it is not a match (e.g. /foo/bar
matches /foo/bar/baz, but does not match /foo/barbaz).

* ImplementationSpecific: Interpretation of the Path matching is up to
  the IngressClass. Implementations can treat this as a separate PathType
  or treat it identically to Prefix or Exact path types.
  Implementations are required to support all path types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#path_type IngressV1#path_type}

---

### IngressV1SpecRuleHttpPathBackend <a name="IngressV1SpecRuleHttpPathBackend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecRuleHttpPathBackend {
	Resource: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1SpecRuleHttpPathBackendResource,
	Service: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1SpecRuleHttpPathBackendService,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a></code> | resource block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a></code> | service block. |

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend.property.resource"></a>

```go
Resource IngressV1SpecRuleHttpPathBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#resource IngressV1#resource}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend.property.service"></a>

```go
Service IngressV1SpecRuleHttpPathBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#service IngressV1#service}

---

### IngressV1SpecRuleHttpPathBackendResource <a name="IngressV1SpecRuleHttpPathBackendResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecRuleHttpPathBackendResource {
	ApiGroup: *string,
	Kind: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.apiGroup">ApiGroup</a></code> | <code>*string</code> | APIGroup is the group for the resource being referenced. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.kind">Kind</a></code> | <code>*string</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.name">Name</a></code> | <code>*string</code> | The name of the User to bind to. |

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.apiGroup"></a>

```go
ApiGroup *string
```

- *Type:* *string

APIGroup is the group for the resource being referenced.

If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#api_group IngressV1#api_group}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#kind IngressV1#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#name IngressV1#name}

---

### IngressV1SpecRuleHttpPathBackendService <a name="IngressV1SpecRuleHttpPathBackendService" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecRuleHttpPathBackendService {
	Name: *string,
	Port: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the referenced service. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a></code> | port block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#name IngressV1#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService.property.port"></a>

```go
Port IngressV1SpecRuleHttpPathBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a>

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#port IngressV1#port}

---

### IngressV1SpecRuleHttpPathBackendServicePort <a name="IngressV1SpecRuleHttpPathBackendServicePort" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecRuleHttpPathBackendServicePort {
	Name: *string,
	Number: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the port of the referenced service. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort.property.number">Number</a></code> | <code>*f64</code> | Specifies the numerical port of the referenced service. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#name IngressV1#name}

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort.property.number"></a>

```go
Number *f64
```

- *Type:* *f64

Specifies the numerical port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#number IngressV1#number}

---

### IngressV1SpecTls <a name="IngressV1SpecTls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1SpecTls {
	Hosts: *[]*string,
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls.property.hosts">Hosts</a></code> | <code>*[]*string</code> | hosts is a list of hosts included in the TLS certificate. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls.property.secretName">SecretName</a></code> | <code>*string</code> | secretName is the name of the secret used to terminate TLS traffic on port 443. |

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls.property.hosts"></a>

```go
Hosts *[]*string
```

- *Type:* *[]*string

hosts is a list of hosts included in the TLS certificate.

The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#hosts IngressV1#hosts}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

secretName is the name of the secret used to terminate TLS traffic on port 443.

Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the "Host" header is used for routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#secret_name IngressV1#secret_name}

---

### IngressV1Status <a name="IngressV1Status" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Status"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Status.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1Status {

}
```


### IngressV1StatusLoadBalancer <a name="IngressV1StatusLoadBalancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1StatusLoadBalancer {

}
```


### IngressV1StatusLoadBalancerIngress <a name="IngressV1StatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1StatusLoadBalancerIngress {

}
```


### IngressV1Timeouts <a name="IngressV1Timeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

&ingressv1.IngressV1Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#create IngressV1#create}. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#delete IngressV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#create IngressV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/ingress_v1#delete IngressV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IngressV1MetadataOutputReference <a name="IngressV1MetadataOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a>

---


### IngressV1SpecDefaultBackendOutputReference <a name="IngressV1SpecDefaultBackendOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecDefaultBackendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1SpecDefaultBackendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putService">PutService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResource` <a name="PutResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putResource"></a>

```go
func PutResource(value IngressV1SpecDefaultBackendResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a>

---

##### `PutService` <a name="PutService" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putService"></a>

```go
func PutService(value IngressV1SpecDefaultBackendService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a>

---

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resetResource"></a>

```go
func ResetResource()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference">IngressV1SpecDefaultBackendResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference">IngressV1SpecDefaultBackendServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.resourceInput">ResourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.serviceInput">ServiceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.resource"></a>

```go
func Resource() IngressV1SpecDefaultBackendResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference">IngressV1SpecDefaultBackendResourceOutputReference</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.service"></a>

```go
func Service() IngressV1SpecDefaultBackendServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference">IngressV1SpecDefaultBackendServiceOutputReference</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.resourceInput"></a>

```go
func ResourceInput() IngressV1SpecDefaultBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.serviceInput"></a>

```go
func ServiceInput() IngressV1SpecDefaultBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1SpecDefaultBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a>

---


### IngressV1SpecDefaultBackendResourceOutputReference <a name="IngressV1SpecDefaultBackendResourceOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecDefaultBackendResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1SpecDefaultBackendResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.apiGroupInput">ApiGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.apiGroup">ApiGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiGroupInput`<sup>Optional</sup> <a name="ApiGroupInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.apiGroupInput"></a>

```go
func ApiGroupInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.apiGroup"></a>

```go
func ApiGroup() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1SpecDefaultBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a>

---


### IngressV1SpecDefaultBackendServiceOutputReference <a name="IngressV1SpecDefaultBackendServiceOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecDefaultBackendServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1SpecDefaultBackendServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.putPort">PutPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPort` <a name="PutPort" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.putPort"></a>

```go
func PutPort(value IngressV1SpecDefaultBackendServicePort)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.putPort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference">IngressV1SpecDefaultBackendServicePortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.portInput">PortInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.port"></a>

```go
func Port() IngressV1SpecDefaultBackendServicePortOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference">IngressV1SpecDefaultBackendServicePortOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.portInput"></a>

```go
func PortInput() IngressV1SpecDefaultBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1SpecDefaultBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a>

---


### IngressV1SpecDefaultBackendServicePortOutputReference <a name="IngressV1SpecDefaultBackendServicePortOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecDefaultBackendServicePortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1SpecDefaultBackendServicePortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNumber` <a name="ResetNumber" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resetNumber"></a>

```go
func ResetNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.numberInput">NumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.numberInput"></a>

```go
func NumberInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1SpecDefaultBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a>

---


### IngressV1SpecOutputReference <a name="IngressV1SpecOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1SpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putDefaultBackend">PutDefaultBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetDefaultBackend">ResetDefaultBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetIngressClassName">ResetIngressClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultBackend` <a name="PutDefaultBackend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putDefaultBackend"></a>

```go
func PutDefaultBackend(value IngressV1SpecDefaultBackend)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putDefaultBackend.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a>

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTls` <a name="PutTls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putTls"></a>

```go
func PutTls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putTls.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultBackend` <a name="ResetDefaultBackend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetDefaultBackend"></a>

```go
func ResetDefaultBackend()
```

##### `ResetIngressClassName` <a name="ResetIngressClassName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetIngressClassName"></a>

```go
func ResetIngressClassName()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetRule"></a>

```go
func ResetRule()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetTls"></a>

```go
func ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.defaultBackend">DefaultBackend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference">IngressV1SpecDefaultBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList">IngressV1SpecRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList">IngressV1SpecTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.defaultBackendInput">DefaultBackendInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ingressClassNameInput">IngressClassNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ingressClassName">IngressClassName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultBackend`<sup>Required</sup> <a name="DefaultBackend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.defaultBackend"></a>

```go
func DefaultBackend() IngressV1SpecDefaultBackendOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference">IngressV1SpecDefaultBackendOutputReference</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.rule"></a>

```go
func Rule() IngressV1SpecRuleList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList">IngressV1SpecRuleList</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.tls"></a>

```go
func Tls() IngressV1SpecTlsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList">IngressV1SpecTlsList</a>

---

##### `DefaultBackendInput`<sup>Optional</sup> <a name="DefaultBackendInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.defaultBackendInput"></a>

```go
func DefaultBackendInput() IngressV1SpecDefaultBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a>

---

##### `IngressClassNameInput`<sup>Optional</sup> <a name="IngressClassNameInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ingressClassNameInput"></a>

```go
func IngressClassNameInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `IngressClassName`<sup>Required</sup> <a name="IngressClassName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ingressClassName"></a>

```go
func IngressClassName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a>

---


### IngressV1SpecRuleHttpOutputReference <a name="IngressV1SpecRuleHttpOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecRuleHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1SpecRuleHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.putPath">PutPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPath` <a name="PutPath" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.putPath"></a>

```go
func PutPath(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.putPath.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList">IngressV1SpecRuleHttpPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.pathInput">PathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.path"></a>

```go
func Path() IngressV1SpecRuleHttpPathList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList">IngressV1SpecRuleHttpPathList</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.pathInput"></a>

```go
func PathInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1SpecRuleHttp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a>

---


### IngressV1SpecRuleHttpPathBackendOutputReference <a name="IngressV1SpecRuleHttpPathBackendOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecRuleHttpPathBackendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1SpecRuleHttpPathBackendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putService">PutService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResource` <a name="PutResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putResource"></a>

```go
func PutResource(value IngressV1SpecRuleHttpPathBackendResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a>

---

##### `PutService` <a name="PutService" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putService"></a>

```go
func PutService(value IngressV1SpecRuleHttpPathBackendService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a>

---

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resetResource"></a>

```go
func ResetResource()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference">IngressV1SpecRuleHttpPathBackendResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference">IngressV1SpecRuleHttpPathBackendServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.resourceInput">ResourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.serviceInput">ServiceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.resource"></a>

```go
func Resource() IngressV1SpecRuleHttpPathBackendResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference">IngressV1SpecRuleHttpPathBackendResourceOutputReference</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.service"></a>

```go
func Service() IngressV1SpecRuleHttpPathBackendServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference">IngressV1SpecRuleHttpPathBackendServiceOutputReference</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.resourceInput"></a>

```go
func ResourceInput() IngressV1SpecRuleHttpPathBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.serviceInput"></a>

```go
func ServiceInput() IngressV1SpecRuleHttpPathBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1SpecRuleHttpPathBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a>

---


### IngressV1SpecRuleHttpPathBackendResourceOutputReference <a name="IngressV1SpecRuleHttpPathBackendResourceOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecRuleHttpPathBackendResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1SpecRuleHttpPathBackendResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.apiGroupInput">ApiGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.apiGroup">ApiGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiGroupInput`<sup>Optional</sup> <a name="ApiGroupInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.apiGroupInput"></a>

```go
func ApiGroupInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.apiGroup"></a>

```go
func ApiGroup() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1SpecRuleHttpPathBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a>

---


### IngressV1SpecRuleHttpPathBackendServiceOutputReference <a name="IngressV1SpecRuleHttpPathBackendServiceOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecRuleHttpPathBackendServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1SpecRuleHttpPathBackendServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.putPort">PutPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPort` <a name="PutPort" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.putPort"></a>

```go
func PutPort(value IngressV1SpecRuleHttpPathBackendServicePort)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.putPort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference">IngressV1SpecRuleHttpPathBackendServicePortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.portInput">PortInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.port"></a>

```go
func Port() IngressV1SpecRuleHttpPathBackendServicePortOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference">IngressV1SpecRuleHttpPathBackendServicePortOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.portInput"></a>

```go
func PortInput() IngressV1SpecRuleHttpPathBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1SpecRuleHttpPathBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a>

---


### IngressV1SpecRuleHttpPathBackendServicePortOutputReference <a name="IngressV1SpecRuleHttpPathBackendServicePortOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecRuleHttpPathBackendServicePortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1SpecRuleHttpPathBackendServicePortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNumber` <a name="ResetNumber" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resetNumber"></a>

```go
func ResetNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.numberInput">NumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.numberInput"></a>

```go
func NumberInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1SpecRuleHttpPathBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a>

---


### IngressV1SpecRuleHttpPathList <a name="IngressV1SpecRuleHttpPathList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecRuleHttpPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IngressV1SpecRuleHttpPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.get"></a>

```go
func Get(index *f64) IngressV1SpecRuleHttpPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IngressV1SpecRuleHttpPathOutputReference <a name="IngressV1SpecRuleHttpPathOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecRuleHttpPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IngressV1SpecRuleHttpPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.putBackend">PutBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetPathType">ResetPathType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackend` <a name="PutBackend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.putBackend"></a>

```go
func PutBackend(value IngressV1SpecRuleHttpPathBackend)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.putBackend.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a>

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPathType` <a name="ResetPathType" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetPathType"></a>

```go
func ResetPathType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference">IngressV1SpecRuleHttpPathBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.backendInput">BackendInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathTypeInput">PathTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathType">PathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.backend"></a>

```go
func Backend() IngressV1SpecRuleHttpPathBackendOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference">IngressV1SpecRuleHttpPathBackendOutputReference</a>

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.backendInput"></a>

```go
func BackendInput() IngressV1SpecRuleHttpPathBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PathTypeInput`<sup>Optional</sup> <a name="PathTypeInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathTypeInput"></a>

```go
func PathTypeInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathType"></a>

```go
func PathType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IngressV1SpecRuleList <a name="IngressV1SpecRuleList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IngressV1SpecRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.get"></a>

```go
func Get(index *f64) IngressV1SpecRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IngressV1SpecRuleOutputReference <a name="IngressV1SpecRuleOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IngressV1SpecRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resetHttp">ResetHttp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.putHttp"></a>

```go
func PutHttp(value IngressV1SpecRuleHttp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a>

---

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetHttp` <a name="ResetHttp" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resetHttp"></a>

```go
func ResetHttp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference">IngressV1SpecRuleHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.httpInput">HttpInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.http"></a>

```go
func Http() IngressV1SpecRuleHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference">IngressV1SpecRuleHttpOutputReference</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.httpInput"></a>

```go
func HttpInput() IngressV1SpecRuleHttp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IngressV1SpecTlsList <a name="IngressV1SpecTlsList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecTlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IngressV1SpecTlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.get"></a>

```go
func Get(index *f64) IngressV1SpecTlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IngressV1SpecTlsOutputReference <a name="IngressV1SpecTlsOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1SpecTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IngressV1SpecTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resetSecretName"></a>

```go
func ResetSecretName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.hostsInput">HostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.hostsInput"></a>

```go
func HostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IngressV1StatusList <a name="IngressV1StatusList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1StatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IngressV1StatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.get"></a>

```go
func Get(index *f64) IngressV1StatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IngressV1StatusLoadBalancerIngressList <a name="IngressV1StatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1StatusLoadBalancerIngressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IngressV1StatusLoadBalancerIngressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.get"></a>

```go
func Get(index *f64) IngressV1StatusLoadBalancerIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IngressV1StatusLoadBalancerIngressOutputReference <a name="IngressV1StatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1StatusLoadBalancerIngressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IngressV1StatusLoadBalancerIngressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngress">IngressV1StatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1StatusLoadBalancerIngress
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngress">IngressV1StatusLoadBalancerIngress</a>

---


### IngressV1StatusLoadBalancerList <a name="IngressV1StatusLoadBalancerList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1StatusLoadBalancerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IngressV1StatusLoadBalancerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.get"></a>

```go
func Get(index *f64) IngressV1StatusLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IngressV1StatusLoadBalancerOutputReference <a name="IngressV1StatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1StatusLoadBalancerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IngressV1StatusLoadBalancerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList">IngressV1StatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancer">IngressV1StatusLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.ingress"></a>

```go
func Ingress() IngressV1StatusLoadBalancerIngressList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList">IngressV1StatusLoadBalancerIngressList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1StatusLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancer">IngressV1StatusLoadBalancer</a>

---


### IngressV1StatusOutputReference <a name="IngressV1StatusOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1StatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IngressV1StatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList">IngressV1StatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Status">IngressV1Status</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.loadBalancer"></a>

```go
func LoadBalancer() IngressV1StatusLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList">IngressV1StatusLoadBalancerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.internalValue"></a>

```go
func InternalValue() IngressV1Status
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Status">IngressV1Status</a>

---


### IngressV1TimeoutsOutputReference <a name="IngressV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/ingressv1"

ingressv1.NewIngressV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IngressV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



