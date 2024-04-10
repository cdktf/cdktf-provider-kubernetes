# `validatingWebhookConfigurationV1` Submodule <a name="`validatingWebhookConfigurationV1` Submodule" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ValidatingWebhookConfigurationV1 <a name="ValidatingWebhookConfigurationV1" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1 kubernetes_validating_webhook_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1(scope Construct, id *string, config ValidatingWebhookConfigurationV1Config) ValidatingWebhookConfigurationV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config">ValidatingWebhookConfigurationV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config">ValidatingWebhookConfigurationV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.putMetadata"></a>

```go
func PutMetadata(value ValidatingWebhookConfigurationV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata">ValidatingWebhookConfigurationV1Metadata</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.putWebhook"></a>

```go
func PutWebhook(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.putWebhook.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ValidatingWebhookConfigurationV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ValidatingWebhookConfigurationV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ValidatingWebhookConfigurationV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ValidatingWebhookConfigurationV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ValidatingWebhookConfigurationV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference">ValidatingWebhookConfigurationV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.webhook">Webhook</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList">ValidatingWebhookConfigurationV1WebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata">ValidatingWebhookConfigurationV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.webhookInput">WebhookInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.metadata"></a>

```go
func Metadata() ValidatingWebhookConfigurationV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference">ValidatingWebhookConfigurationV1MetadataOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.webhook"></a>

```go
func Webhook() ValidatingWebhookConfigurationV1WebhookList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList">ValidatingWebhookConfigurationV1WebhookList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.metadataInput"></a>

```go
func MetadataInput() ValidatingWebhookConfigurationV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata">ValidatingWebhookConfigurationV1Metadata</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.webhookInput"></a>

```go
func WebhookInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ValidatingWebhookConfigurationV1Config <a name="ValidatingWebhookConfigurationV1Config" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

&validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata,
	Webhook: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata">ValidatingWebhookConfigurationV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.webhook">Webhook</a></code> | <code>interface{}</code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#id ValidatingWebhookConfigurationV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.metadata"></a>

```go
Metadata ValidatingWebhookConfigurationV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata">ValidatingWebhookConfigurationV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#metadata ValidatingWebhookConfigurationV1#metadata}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.webhook"></a>

```go
Webhook interface{}
```

- *Type:* interface{}

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#webhook ValidatingWebhookConfigurationV1#webhook}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#id ValidatingWebhookConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ValidatingWebhookConfigurationV1Metadata <a name="ValidatingWebhookConfigurationV1Metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

&validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1Metadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the validating webhook configuration that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the validating webhook configuration. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the validating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the validating webhook configuration that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#annotations ValidatingWebhookConfigurationV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#generate_name ValidatingWebhookConfigurationV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the validating webhook configuration.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#labels ValidatingWebhookConfigurationV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the validating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#name ValidatingWebhookConfigurationV1#name}

---

### ValidatingWebhookConfigurationV1Webhook <a name="ValidatingWebhookConfigurationV1Webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

&validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1Webhook {
	ClientConfig: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig,
	Name: *string,
	AdmissionReviewVersions: *[]*string,
	FailurePolicy: *string,
	MatchPolicy: *string,
	NamespaceSelector: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector,
	ObjectSelector: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector,
	Rule: interface{},
	SideEffects: *string,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig">ValidatingWebhookConfigurationV1WebhookClientConfig</a></code> | client_config block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.name">Name</a></code> | <code>*string</code> | The name of the admission webhook. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.admissionReviewVersions">AdmissionReviewVersions</a></code> | <code>*[]*string</code> | AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.failurePolicy">FailurePolicy</a></code> | <code>*string</code> | FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.matchPolicy">MatchPolicy</a></code> | <code>*string</code> | matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent". |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector">ValidatingWebhookConfigurationV1WebhookNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector">ValidatingWebhookConfigurationV1WebhookObjectSelector</a></code> | object_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.sideEffects">SideEffects</a></code> | <code>*string</code> | SideEffects states whether this webhook has side effects. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | TimeoutSeconds specifies the timeout for this webhook. |

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.clientConfig"></a>

```go
ClientConfig ValidatingWebhookConfigurationV1WebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig">ValidatingWebhookConfigurationV1WebhookClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#client_config ValidatingWebhookConfigurationV1#client_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the admission webhook.

Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#name ValidatingWebhookConfigurationV1#name}

---

##### `AdmissionReviewVersions`<sup>Optional</sup> <a name="AdmissionReviewVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.admissionReviewVersions"></a>

```go
AdmissionReviewVersions *[]*string
```

- *Type:* *[]*string

AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects.

API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#admission_review_versions ValidatingWebhookConfigurationV1#admission_review_versions}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.failurePolicy"></a>

```go
FailurePolicy *string
```

- *Type:* *string

FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail.

Defaults to Fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#failure_policy ValidatingWebhookConfigurationV1#failure_policy}

---

##### `MatchPolicy`<sup>Optional</sup> <a name="MatchPolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.matchPolicy"></a>

```go
MatchPolicy *string
```

- *Type:* *string

matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

* Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
* Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#match_policy ValidatingWebhookConfigurationV1#match_policy}

---

##### `NamespaceSelector`<sup>Optional</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.namespaceSelector"></a>

```go
NamespaceSelector ValidatingWebhookConfigurationV1WebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector">ValidatingWebhookConfigurationV1WebhookNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#namespace_selector ValidatingWebhookConfigurationV1#namespace_selector}

---

##### `ObjectSelector`<sup>Optional</sup> <a name="ObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.objectSelector"></a>

```go
ObjectSelector ValidatingWebhookConfigurationV1WebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector">ValidatingWebhookConfigurationV1WebhookObjectSelector</a>

object_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#object_selector ValidatingWebhookConfigurationV1#object_selector}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#rule ValidatingWebhookConfigurationV1#rule}

---

##### `SideEffects`<sup>Optional</sup> <a name="SideEffects" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.sideEffects"></a>

```go
SideEffects *string
```

- *Type:* *string

SideEffects states whether this webhook has side effects.

Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#side_effects ValidatingWebhookConfigurationV1#side_effects}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Webhook.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

TimeoutSeconds specifies the timeout for this webhook.

After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#timeout_seconds ValidatingWebhookConfigurationV1#timeout_seconds}

---

### ValidatingWebhookConfigurationV1WebhookClientConfig <a name="ValidatingWebhookConfigurationV1WebhookClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

&validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1WebhookClientConfig {
	CaBundle: *string,
	Service: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig.property.caBundle">CaBundle</a></code> | <code>*string</code> | `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService">ValidatingWebhookConfigurationV1WebhookClientConfigService</a></code> | service block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig.property.url">Url</a></code> | <code>*string</code> | `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). |

---

##### `CaBundle`<sup>Optional</sup> <a name="CaBundle" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig.property.caBundle"></a>

```go
CaBundle *string
```

- *Type:* *string

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#ca_bundle ValidatingWebhookConfigurationV1#ca_bundle}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig.property.service"></a>

```go
Service ValidatingWebhookConfigurationV1WebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService">ValidatingWebhookConfigurationV1WebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#service ValidatingWebhookConfigurationV1#service}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

`url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`).

Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#url ValidatingWebhookConfigurationV1#url}

---

### ValidatingWebhookConfigurationV1WebhookClientConfigService <a name="ValidatingWebhookConfigurationV1WebhookClientConfigService" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

&validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1WebhookClientConfigService {
	Name: *string,
	Namespace: *string,
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService.property.name">Name</a></code> | <code>*string</code> | `name` is the name of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService.property.namespace">Namespace</a></code> | <code>*string</code> | `namespace` is the namespace of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService.property.path">Path</a></code> | <code>*string</code> | `path` is an optional URL path which will be sent in any request to this service. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService.property.port">Port</a></code> | <code>*f64</code> | If specified, the port on the service that hosting webhook. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService.property.name"></a>

```go
Name *string
```

- *Type:* *string

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#name ValidatingWebhookConfigurationV1#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#namespace ValidatingWebhookConfigurationV1#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService.property.path"></a>

```go
Path *string
```

- *Type:* *string

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#path ValidatingWebhookConfigurationV1#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#port ValidatingWebhookConfigurationV1#port}

---

### ValidatingWebhookConfigurationV1WebhookNamespaceSelector <a name="ValidatingWebhookConfigurationV1WebhookNamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

&validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector {
	MatchExpressions: interface{},
	MatchLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchExpressions">MatchExpressions</a></code> | <code>interface{}</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchExpressions"></a>

```go
MatchExpressions interface{}
```

- *Type:* interface{}

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#match_expressions ValidatingWebhookConfigurationV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchLabels"></a>

```go
MatchLabels *map[string]*string
```

- *Type:* *map[string]*string

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#match_labels ValidatingWebhookConfigurationV1#match_labels}

---

### ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions <a name="ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

&validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.key">Key</a></code> | <code>*string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.operator">Operator</a></code> | <code>*string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.values">Values</a></code> | <code>*[]*string</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#key ValidatingWebhookConfigurationV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#operator ValidatingWebhookConfigurationV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#values ValidatingWebhookConfigurationV1#values}

---

### ValidatingWebhookConfigurationV1WebhookObjectSelector <a name="ValidatingWebhookConfigurationV1WebhookObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

&validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1WebhookObjectSelector {
	MatchExpressions: interface{},
	MatchLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector.property.matchExpressions">MatchExpressions</a></code> | <code>interface{}</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector.property.matchExpressions"></a>

```go
MatchExpressions interface{}
```

- *Type:* interface{}

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#match_expressions ValidatingWebhookConfigurationV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector.property.matchLabels"></a>

```go
MatchLabels *map[string]*string
```

- *Type:* *map[string]*string

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#match_labels ValidatingWebhookConfigurationV1#match_labels}

---

### ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions <a name="ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

&validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.key">Key</a></code> | <code>*string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.operator">Operator</a></code> | <code>*string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.values">Values</a></code> | <code>*[]*string</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#key ValidatingWebhookConfigurationV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#operator ValidatingWebhookConfigurationV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#values ValidatingWebhookConfigurationV1#values}

---

### ValidatingWebhookConfigurationV1WebhookRule <a name="ValidatingWebhookConfigurationV1WebhookRule" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

&validatingwebhookconfigurationv1.ValidatingWebhookConfigurationV1WebhookRule {
	ApiGroups: *[]*string,
	ApiVersions: *[]*string,
	Operations: *[]*string,
	Resources: *[]*string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.property.apiGroups">ApiGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#api_groups ValidatingWebhookConfigurationV1#api_groups}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.property.apiVersions">ApiVersions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#api_versions ValidatingWebhookConfigurationV1#api_versions}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.property.operations">Operations</a></code> | <code>*[]*string</code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#resources ValidatingWebhookConfigurationV1#resources}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#scope ValidatingWebhookConfigurationV1#scope}. |

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.property.apiGroups"></a>

```go
ApiGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#api_groups ValidatingWebhookConfigurationV1#api_groups}.

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.property.apiVersions"></a>

```go
ApiVersions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#api_versions ValidatingWebhookConfigurationV1#api_versions}.

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.property.operations"></a>

```go
Operations *[]*string
```

- *Type:* *[]*string

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#operations ValidatingWebhookConfigurationV1#operations}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#resources ValidatingWebhookConfigurationV1#resources}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRule.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/validating_webhook_configuration_v1#scope ValidatingWebhookConfigurationV1#scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### ValidatingWebhookConfigurationV1MetadataOutputReference <a name="ValidatingWebhookConfigurationV1MetadataOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ValidatingWebhookConfigurationV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata">ValidatingWebhookConfigurationV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() ValidatingWebhookConfigurationV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1Metadata">ValidatingWebhookConfigurationV1Metadata</a>

---


### ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference <a name="ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookClientConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService">PutService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetCaBundle">ResetCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutService` <a name="PutService" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService"></a>

```go
func PutService(value ValidatingWebhookConfigurationV1WebhookClientConfigService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService">ValidatingWebhookConfigurationV1WebhookClientConfigService</a>

---

##### `ResetCaBundle` <a name="ResetCaBundle" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetCaBundle"></a>

```go
func ResetCaBundle()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference">ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundleInput">CaBundleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService">ValidatingWebhookConfigurationV1WebhookClientConfigService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundle">CaBundle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig">ValidatingWebhookConfigurationV1WebhookClientConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.service"></a>

```go
func Service() ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference">ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference</a>

---

##### `CaBundleInput`<sup>Optional</sup> <a name="CaBundleInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundleInput"></a>

```go
func CaBundleInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() ValidatingWebhookConfigurationV1WebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService">ValidatingWebhookConfigurationV1WebhookClientConfigService</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `CaBundle`<sup>Required</sup> <a name="CaBundle" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundle"></a>

```go
func CaBundle() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ValidatingWebhookConfigurationV1WebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig">ValidatingWebhookConfigurationV1WebhookClientConfig</a>

---


### ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference <a name="ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService">ValidatingWebhookConfigurationV1WebhookClientConfigService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() ValidatingWebhookConfigurationV1WebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigService">ValidatingWebhookConfigurationV1WebhookClientConfigService</a>

---


### ValidatingWebhookConfigurationV1WebhookList <a name="ValidatingWebhookConfigurationV1WebhookList" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ValidatingWebhookConfigurationV1WebhookList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.get"></a>

```go
func Get(index *f64) ValidatingWebhookConfigurationV1WebhookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList <a name="ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get"></a>

```go
func Get(index *f64) ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference <a name="ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference <a name="ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.putMatchExpressions"></a>

```go
func PutMatchExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```go
func ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchLabels"></a>

```go
func ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList">ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector">ValidatingWebhookConfigurationV1WebhookNamespaceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressions"></a>

```go
func MatchExpressions() ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList">ValidatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```go
func MatchExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```go
func MatchLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabels"></a>

```go
func MatchLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ValidatingWebhookConfigurationV1WebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector">ValidatingWebhookConfigurationV1WebhookNamespaceSelector</a>

---


### ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList <a name="ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get"></a>

```go
func Get(index *f64) ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference <a name="ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference <a name="ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.putMatchExpressions"></a>

```go
func PutMatchExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchExpressions"></a>

```go
func ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchLabels"></a>

```go
func ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList">ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector">ValidatingWebhookConfigurationV1WebhookObjectSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressions"></a>

```go
func MatchExpressions() ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList">ValidatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressionsInput"></a>

```go
func MatchExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabelsInput"></a>

```go
func MatchLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabels"></a>

```go
func MatchLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ValidatingWebhookConfigurationV1WebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector">ValidatingWebhookConfigurationV1WebhookObjectSelector</a>

---


### ValidatingWebhookConfigurationV1WebhookOutputReference <a name="ValidatingWebhookConfigurationV1WebhookOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ValidatingWebhookConfigurationV1WebhookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putClientConfig">PutClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putNamespaceSelector">PutNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putObjectSelector">PutObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetAdmissionReviewVersions">ResetAdmissionReviewVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetMatchPolicy">ResetMatchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetNamespaceSelector">ResetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetObjectSelector">ResetObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetSideEffects">ResetSideEffects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfig` <a name="PutClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putClientConfig"></a>

```go
func PutClientConfig(value ValidatingWebhookConfigurationV1WebhookClientConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig">ValidatingWebhookConfigurationV1WebhookClientConfig</a>

---

##### `PutNamespaceSelector` <a name="PutNamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putNamespaceSelector"></a>

```go
func PutNamespaceSelector(value ValidatingWebhookConfigurationV1WebhookNamespaceSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector">ValidatingWebhookConfigurationV1WebhookNamespaceSelector</a>

---

##### `PutObjectSelector` <a name="PutObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putObjectSelector"></a>

```go
func PutObjectSelector(value ValidatingWebhookConfigurationV1WebhookObjectSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putObjectSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector">ValidatingWebhookConfigurationV1WebhookObjectSelector</a>

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdmissionReviewVersions` <a name="ResetAdmissionReviewVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetAdmissionReviewVersions"></a>

```go
func ResetAdmissionReviewVersions()
```

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetFailurePolicy"></a>

```go
func ResetFailurePolicy()
```

##### `ResetMatchPolicy` <a name="ResetMatchPolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetMatchPolicy"></a>

```go
func ResetMatchPolicy()
```

##### `ResetNamespaceSelector` <a name="ResetNamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetNamespaceSelector"></a>

```go
func ResetNamespaceSelector()
```

##### `ResetObjectSelector` <a name="ResetObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetObjectSelector"></a>

```go
func ResetObjectSelector()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetRule"></a>

```go
func ResetRule()
```

##### `ResetSideEffects` <a name="ResetSideEffects" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetSideEffects"></a>

```go
func ResetSideEffects()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference">ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference">ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference">ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList">ValidatingWebhookConfigurationV1WebhookRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersionsInput">AdmissionReviewVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.clientConfigInput">ClientConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig">ValidatingWebhookConfigurationV1WebhookClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicyInput">MatchPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelectorInput">NamespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector">ValidatingWebhookConfigurationV1WebhookNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.objectSelectorInput">ObjectSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector">ValidatingWebhookConfigurationV1WebhookObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.sideEffectsInput">SideEffectsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersions">AdmissionReviewVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicy">MatchPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.sideEffects">SideEffects</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.clientConfig"></a>

```go
func ClientConfig() ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference">ValidatingWebhookConfigurationV1WebhookClientConfigOutputReference</a>

---

##### `NamespaceSelector`<sup>Required</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelector"></a>

```go
func NamespaceSelector() ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference">ValidatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference</a>

---

##### `ObjectSelector`<sup>Required</sup> <a name="ObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.objectSelector"></a>

```go
func ObjectSelector() ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference">ValidatingWebhookConfigurationV1WebhookObjectSelectorOutputReference</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.rule"></a>

```go
func Rule() ValidatingWebhookConfigurationV1WebhookRuleList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList">ValidatingWebhookConfigurationV1WebhookRuleList</a>

---

##### `AdmissionReviewVersionsInput`<sup>Optional</sup> <a name="AdmissionReviewVersionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersionsInput"></a>

```go
func AdmissionReviewVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientConfigInput`<sup>Optional</sup> <a name="ClientConfigInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.clientConfigInput"></a>

```go
func ClientConfigInput() ValidatingWebhookConfigurationV1WebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookClientConfig">ValidatingWebhookConfigurationV1WebhookClientConfig</a>

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicyInput"></a>

```go
func FailurePolicyInput() *string
```

- *Type:* *string

---

##### `MatchPolicyInput`<sup>Optional</sup> <a name="MatchPolicyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicyInput"></a>

```go
func MatchPolicyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceSelectorInput`<sup>Optional</sup> <a name="NamespaceSelectorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelectorInput"></a>

```go
func NamespaceSelectorInput() ValidatingWebhookConfigurationV1WebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookNamespaceSelector">ValidatingWebhookConfigurationV1WebhookNamespaceSelector</a>

---

##### `ObjectSelectorInput`<sup>Optional</sup> <a name="ObjectSelectorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.objectSelectorInput"></a>

```go
func ObjectSelectorInput() ValidatingWebhookConfigurationV1WebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookObjectSelector">ValidatingWebhookConfigurationV1WebhookObjectSelector</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `SideEffectsInput`<sup>Optional</sup> <a name="SideEffectsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.sideEffectsInput"></a>

```go
func SideEffectsInput() *string
```

- *Type:* *string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `AdmissionReviewVersions`<sup>Required</sup> <a name="AdmissionReviewVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersions"></a>

```go
func AdmissionReviewVersions() *[]*string
```

- *Type:* *[]*string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicy"></a>

```go
func FailurePolicy() *string
```

- *Type:* *string

---

##### `MatchPolicy`<sup>Required</sup> <a name="MatchPolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicy"></a>

```go
func MatchPolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SideEffects`<sup>Required</sup> <a name="SideEffects" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.sideEffects"></a>

```go
func SideEffects() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationV1WebhookRuleList <a name="ValidatingWebhookConfigurationV1WebhookRuleList" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ValidatingWebhookConfigurationV1WebhookRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.get"></a>

```go
func Get(index *f64) ValidatingWebhookConfigurationV1WebhookRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationV1WebhookRuleOutputReference <a name="ValidatingWebhookConfigurationV1WebhookRuleOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v11/validatingwebhookconfigurationv1"

validatingwebhookconfigurationv1.NewValidatingWebhookConfigurationV1WebhookRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ValidatingWebhookConfigurationV1WebhookRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroupsInput">ApiGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersionsInput">ApiVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.operationsInput">OperationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroups">ApiGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersions">ApiVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.operations">Operations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiGroupsInput`<sup>Optional</sup> <a name="ApiGroupsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroupsInput"></a>

```go
func ApiGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiVersionsInput`<sup>Optional</sup> <a name="ApiVersionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersionsInput"></a>

```go
func ApiVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.operationsInput"></a>

```go
func OperationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroups"></a>

```go
func ApiGroups() *[]*string
```

- *Type:* *[]*string

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersions"></a>

```go
func ApiVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.operations"></a>

```go
func Operations() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfigurationV1.ValidatingWebhookConfigurationV1WebhookRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



